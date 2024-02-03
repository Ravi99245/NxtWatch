import WatchContext from '../../context/WatchContext'
import {
  LinkItem,
  ThumbnailImage,
  ListItem,
  Title,
  ViewCount,
} from './styledComponent'

const GamingVideoCard = props => {
  const {card} = props
  const {id, thumbnailUrl, title, viewCount} = card

  return (
    <WatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <LinkItem isLightModeOn={isLightModeOn} to={`/videos/${id}`}>
            <ListItem isLightModeOn={isLightModeOn}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <Title>{title}</Title>
              <ViewCount>{viewCount} Watching Worldwide</ViewCount>
            </ListItem>
          </LinkItem>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default GamingVideoCard
