import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import WatchContext from '../../context/WatchContext'
import {LinkItem, ListItem, ThumbnailImage, MiddleDot} from './styledComponent'

const TrendingVideoCard = props => {
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
        const timeDuration = formatDistanceToNow(new Date(publishedAt))
        return (
          <LinkItem to={`/videos/${id}`} isLightModeOn={isLightModeOn}>
            <ListItem>
              <div>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <div>
                  <h1>{title}</h1>
                  <p>{name}</p>
                  <p>
                    {viewCount} <MiddleDot>&middot;</MiddleDot> {timeDuration}
                  </p>
                </div>
              </div>
            </ListItem>
          </LinkItem>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingVideoCard
