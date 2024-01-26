import {Component} from 'react'
import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'

import {
  AllVideosContainer,
  SearchInputContainer,
  SearchElement,
  SearchButton,
  SearchIcon,
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
  }

  componentDidMount() {
    this.getVideosList()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  renderSearchInput = () => {
    const {searchInput, videosList, total} = this.state
    console.log(videosList)
    console.log(total)
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
              />
              <SearchButton
                type="button"
                aria-label="search"
                isLightModeOn={isLightModeOn}
              >
                <SearchIcon light={isLightModeOn ? 'true' : 'false'} />
              </SearchButton>
            </SearchInputContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <AllVideosContainer isLightModeOn={isLightModeOn}>
              {this.renderSearchInput()}
            </AllVideosContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default AllVideosSection
