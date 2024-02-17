import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import WatchContext from '../../context/WatchContext'
import VideoCard from '../VideoCard/index'
import FailedView from '../FailureView'

import {
  AllVideosContainer,
  SearchInputContainer,
  SearchElement,
  SearchButton,
  SearchIcon,
  VideosSection,
  VideosContainer,
  VideosList,
  LoaderContainer,
} from './styledComponent'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class AllVideosSection extends Component {
  state = {
    apiStatus: apiStatusText.initial,
    videosList: [],
    searchInput: '',
    total: '',
    url: 'https://apis.ccbp.in/videos/all?search=',
  }

  componentDidMount() {
    this.getVideosList()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getVideosList = async () => {
    const {url} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const {total} = fetchedData
      const fetchedVideos = fetchedData.videos
      const videos = fetchedVideos.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: videos,
        total,
        apiStatus: apiStatusText.success,
      })
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateUrl = () => {
    const {searchInput} = this.state
    this.setState(
      {
        url: `https://apis.ccbp.in/videos/all?search=${searchInput}`,
        apiStatus: apiStatusText.inProgress,
      },
      this.getVideosList,
    )
  }

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <SearchInputContainer>
              <SearchElement
                type="search"
                placeholder="Serach"
                onChange={this.updateSearchInput}
                isLightModeOn={isLightModeOn}
                value={searchInput}
              />
              <SearchButton
                type="button"
                aria-label="search"
                isLightModeOn={isLightModeOn}
                onClick={this.updateUrl}
              >
                <SearchIcon light={isLightModeOn ? 'true' : 'false'} />
              </SearchButton>
            </SearchInputContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderVideosView = () => {
    const {total, videosList} = this.state

    return total > 0 ? (
      <VideosContainer>
        <VideosList>
          {videosList.map(eachItem => (
            <VideoCard key={eachItem.id} card={eachItem} />
          ))}
        </VideosList>
      </VideosContainer>
    ) : (
      <div>No Videos</div>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="Watch" color="#475569" height="50" width="50" />
    </LoaderContainer>
  )

  retryEverything = () => {
    this.setState({apiStatus: apiStatusText.inProgress}, this.getVideosList)
  }

  renderFailureView = () => (
    <FailedView retryEverything={this.retryEverything} />
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.success:
        return this.renderVideosView()
      case apiStatusText.failure:
        return this.renderFailureView()
      case apiStatusText.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <AllVideosContainer isLightModeOn={isLightModeOn}>
              {this.renderSearchInput()}
              <VideosSection>{this.renderAllVideos()}</VideosSection>
            </AllVideosContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default AllVideosSection
