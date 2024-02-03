import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import GamingVideoCard from '../GamingVideoCard/index'

import WatchContext from '../../context/WatchContext'

import {
  GamingVideosContainer,
  LoaderContainer,
  HeadingContainer,
  GamingIcon,
  FireIConContainer,
  VideosList,
  VideosListContainer,
} from './styledComponent'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideosSection extends Component {
  state = {apiStatus: apiStatusText.initial, gamingVideos: [], total: ''}

  componentDidMount() {
    this.getGamingVideosList()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getGamingVideosList = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      const {total, videos} = fetchedData
      const gamingVideos = videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({apiStatus: apiStatusText.success, total, gamingVideos})
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  renderGamingVideos = () => {
    const {gamingVideos, total} = this.state
    console.log(gamingVideos)
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <>
              <HeadingContainer isLightModeOn={isLightModeOn}>
                <FireIConContainer isLightModeOn={isLightModeOn}>
                  <GamingIcon size={35} />
                </FireIConContainer>
                <h1>Gaming</h1>
              </HeadingContainer>
              <VideosListContainer>
                <VideosList>
                  {gamingVideos.map(eachItem => (
                    <GamingVideoCard key={eachItem.id} card={eachItem} />
                  ))}
                </VideosList>
              </VideosListContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="Watch" color="#475569" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllGamingVideosSection = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.success:
        return this.renderGamingVideos()
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
            <GamingVideosContainer isLightModeOn={isLightModeOn}>
              {this.renderAllGamingVideosSection()}
            </GamingVideosContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default GamingVideosSection