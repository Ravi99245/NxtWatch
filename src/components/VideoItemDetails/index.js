import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import Sidebar from '../Sidebar/index'
import MiddleDot from '../MiddleDot'
import FiledView from '../FailureView'

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
  LikeIcon,
  DisLikeIcon,
  SavedIcon,
  Line,
  ProfileImage,
  ChannelName,
  Subscribers,
  Description,
  MobileDescriptionContainer,
  SubscribersContainer,
  LargeDescription,
  YearContainer,
  SaveButton,
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
      const videoDetails = {
        id: fetchedVideoDetails.id,
        name: fetchedVideoDetails.channel.name,
        profileImageUrl: fetchedVideoDetails.channel.profile_image_url,
        subscribersCount: fetchedVideoDetails.channel.subscriber_count,
        description: fetchedVideoDetails.description,
        publishedAt: fetchedVideoDetails.published_at,
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
    const {videoDetails, isLiked, isDisliked} = this.state
    const {
      id,
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      subscribersCount,
      name,
      description,
    } = videoDetails
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn, updateVideos, savedVideos} = value
          const changeSaveButton = () => {
            this.ChangeSaveButton()
            updateVideos(videoDetails)
          }
          const isAdded = savedVideos.some(eachItem => eachItem.id === id)
          const time = formatDistanceToNow(new Date(publishedAt))
          return (
            <>
              <ReactPlayerContainer url={videoUrl} controls />
              <TitleHeading>{title}</TitleHeading>
              <DescriptionContainer>
                <ViewCountContainer>
                  <Views>{viewCount}</Views>
                  <YearContainer>
                    <MiddleDot />
                    <Views>{time}</Views>
                  </YearContainer>
                </ViewCountContainer>
                <ViewCountContainer>
                  <LikeButton
                    type="button"
                    data-testid="like"
                    isActive={isLiked}
                    onClick={this.ChangeLikeButton}
                  >
                    <LikeIcon />
                    <Views>Like</Views>
                  </LikeButton>
                  <LikeButton
                    type="button"
                    data-testid="like"
                    isActive={isDisliked}
                    onClick={this.ChangeDislikeButton}
                  >
                    <DisLikeIcon />
                    <Views>Dislike</Views>
                  </LikeButton>
                  <SaveButton
                    type="button"
                    data-testid="like"
                    isAdded={isAdded}
                    onClick={changeSaveButton}
                  >
                    <SavedIcon />
                    <Views>{isAdded ? 'Saved' : 'Save'}</Views>
                  </SaveButton>
                </ViewCountContainer>
              </DescriptionContainer>
              <Line isLightModeOn={isLightModeOn} />
              <SubscribersContainer>
                <MobileDescriptionContainer>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelName>{name}</ChannelName>
                    <Subscribers>{subscribersCount} subscribers</Subscribers>
                    <LargeDescription>{description}</LargeDescription>
                  </div>
                </MobileDescriptionContainer>
                <Description>{description}</Description>
              </SubscribersContainer>
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

  retryEverything = () => {
    this.setState(
      {apiStatus: apiStatusText.inProgress},
      this.getVideosItemDetails,
    )
  }

  renderFailureView = () => <FiledView retryEverything={this.retryEverything} />

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
