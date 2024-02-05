import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import Sidebar from '../Sidebar/index'

import WatchContext from '../../context/WatchContext'
import {VideoDetailsContainer, DetailsContainer} from './styledComponent'

const apiStatusText = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isUnliked: false,
    isSaved: false,
    apiStatus: apiStatusText.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideosItemDetails()
  }

  getVideosItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    console.log(id)
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
      }
      console.log(videoDetails)
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
              </DetailsContainer>
            </VideoDetailsContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
