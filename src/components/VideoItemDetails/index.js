import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import Sidebar from '../Sidebar/index'
import MiddleDot from '../MiddleDot'

import WatchContext from '../../context/WatchContext'
import {
  VideoDetailsContainer,
  DetailsContainer,
  LoaderContainer,
  VideoContainer,
  ReactPlayerContainer,
  TitleHeading,
  DescriptionContainer,
  ViewCountContainer,
  Views,
  LikeButton,
} from './styledComponent'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    isSaved: false,
    apiStatus: apiStatusText.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideosItemDetails()
    this.setState({apiStatus: apiStatusText.inProgress})
  }

  getVideosItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const fetchedVideoDetails = fetchedData.video_details
      console.log(fetchedVideoDetails)
      const videoDetails = {
        name: fetchedVideoDetails.channel.name,
        profileImageUrl: fetchedVideoDetails.channel.profile_image_url,
        subscribersCount: fetchedVideoDetails.channel.subscriber_count,
        description: fetchedVideoDetails.description,
        publishedAt: formatDistanceToNow(
          new Date(fetchedVideoDetails.published_at),
        ),
        thumbnailUrl: fetchedVideoDetails.thumbnail_url,
        title: fetchedVideoDetails.title,
        videoUrl: fetchedVideoDetails.video_url,
        viewCount: fetchedVideoDetails.view_count,
        isLiked: false,
        isDisliked: false,
      }
      this.setState({videoDetails, apiStatus: apiStatusText.success})
    } else {
      this.setState({apiStatus: apiStatusText.failure})
    }
  }

  ChangeLikeButton = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  ChangeDislikeButton = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  ChangeSaveButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  renderVideoPlayer = () => {
    const {videoDetails, isLiked, isDisliked, isSaved} = this.state
    const {thumbnailUrl, videoUrl, title, viewCount, publishedAt} = videoDetails
    console.log(thumbnailUrl)
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <>
              <ReactPlayerContainer url={videoUrl} controls playing />
              <TitleHeading>{title}</TitleHeading>
              <DescriptionContainer>
                <ViewCountContainer>
                  <Views>{viewCount}</Views>
                  <MiddleDot />
                  <Views>{publishedAt}</Views>
                </ViewCountContainer>
                <ViewCountContainer>
                  <LikeButton
                    type="button"
                    data-testid="like"
                    isActive={isLiked}
                    onClick={this.ChangeLikeButton}
                  >
                    <BiLike size={22} />
                    <Views>Like</Views>
                  </LikeButton>
                  <LikeButton
                    type="button"
                    data-testid="like"
                    isActive={isDisliked}
                    onClick={this.ChangeDislikeButton}
                  >
                    <BiDislike size={22} />
                    <Views>Dislike</Views>
                  </LikeButton>
                  <LikeButton
                    type="button"
                    data-testid="like"
                    isActive={isSaved}
                    onClick={this.ChangeSaveButton}
                  >
                    <MdPlaylistAdd size={22} />
                    <Views>{isSaved ? 'Saved' : 'Save'}</Views>
                  </LikeButton>
                </ViewCountContainer>
              </DescriptionContainer>
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

  renderVideoPlayerDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusText.success:
        return this.renderVideoPlayer()
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
            <VideoDetailsContainer
              isLightModeOn={isLightModeOn}
              data-testid="videoItemDetails"
            >
              <Header />
              <DetailsContainer>
                <Sidebar />
                <VideoContainer isLightModeOn={isLightModeOn}>
                  {this.renderVideoPlayerDetails()}
                </VideoContainer>
              </DetailsContainer>
            </VideoDetailsContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
