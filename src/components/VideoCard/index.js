import {Link} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'
import {
  LinkItem,
  VideoItem,
  ThumbnailImage,
  ChannelLogo,
  Title,
  VideoContent,
  VideoDescription,
  ChannelName,
  MiddleDot,
  ViewsCount,
} from './styledComponent'

const VideoCard = props => {
  const {card} = props
  const {
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    id,
  } = card
  return (
    <WatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <LinkItem to={`/videos/${id}`}>
            <VideoItem isLightModeOn={isLightModeOn}>
              <div>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoContent>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoDescription>
                    <Title>{title}</Title>
                    <ChannelName>{name}</ChannelName>
                    <div>
                      <ViewsCount>
                        {viewCount} <MiddleDot>&middot;</MiddleDot>{' '}
                        {publishedAt}
                      </ViewsCount>
                    </div>
                  </VideoDescription>
                </VideoContent>
              </div>
            </VideoItem>
          </LinkItem>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoCard
