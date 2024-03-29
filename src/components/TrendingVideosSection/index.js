import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FailedView from '../FailureView'
import TrendingVideoCard from '../TrendingVideoCard/index'

import WatchContext from '../../context/WatchContext'

import {
  TrendingContainer,
  HeadingContainer,
  FireIcon,
  FireIConContainer,
  LoaderContainer,
  TrendingVideosList,
  TrendingContent,
} from './styledComponent'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingVideosSection extends Component {
  state = {
    apiStatus: apiStatusText.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideosList()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getTrendingVideosList = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const {videos} = fetchedData
      const videosList = videos.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: apiStatusText.success,
        trendingVideos: videosList,
      })
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  renderTrendingVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <TrendingContent>
              <HeadingContainer isLightModeOn={isLightModeOn}>
                <FireIConContainer isLightModeOn={isLightModeOn}>
                  <FireIcon size={35} />
                </FireIConContainer>
                <h1>Trending</h1>
              </HeadingContainer>
              <TrendingVideosList>
                {trendingVideos.map(eachItem => (
                  <TrendingVideoCard key={eachItem.id} card={eachItem} />
                ))}
              </TrendingVideosList>
            </TrendingContent>
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

  retryEverything = () => {
    this.setState(
      {apiStatus: apiStatusText.inProgress},
      this.getTrendingVideosList,
    )
  }

  renderFailureView = () => (
    <FailedView retryEverything={this.retryEverything} />
  )

  renderAllTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.success:
        return this.renderTrendingVideosView()
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
            <TrendingContainer isLightModeOn={isLightModeOn}>
              {this.renderAllTrendingVideos()}
            </TrendingContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default TrendingVideosSection
