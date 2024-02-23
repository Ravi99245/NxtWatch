import {formatDistanceToNow} from 'date-fns'

import WatchContext from '../../context/WatchContext'
import MiddleDot from '../MiddleDot/index'
import {
  LinkItem,
  ListItem,
  ThumbnailImage,
  TrendingContent,
  TrendingDescriptionContainer,
  TrendingTitle,
  ThumbnailContainer,
  Name,
  ViewCount,
  ProfileImage,
  TrendingMobileTitle,
  TrendingMobileDescription,
  TrendingDescriptionMobileContainer,
  ViewsSection,
} from './styledComponent'

const TrendingVideoCard = props => {
  const {card} = props
  const {
    name,
    publishedAt,
    profileImageUrl,
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
              <TrendingContent>
                <ThumbnailContainer>
                  <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                </ThumbnailContainer>
                <TrendingDescriptionContainer>
                  <TrendingTitle>{title}</TrendingTitle>
                  <Name isLightModeOn={isLightModeOn}>{name}</Name>
                  <ViewCount isLightModeOn={isLightModeOn}>
                    {viewCount} <MiddleDot /> {timeDuration}
                  </ViewCount>
                </TrendingDescriptionContainer>
                <TrendingMobileDescription isLightModeOn={isLightModeOn}>
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                  <TrendingDescriptionMobileContainer>
                    <TrendingMobileTitle>{title}</TrendingMobileTitle>
                    <ViewsSection>
                      <p>{name} </p> <MiddleDot /> <p>{viewCount} </p>{' '}
                      <MiddleDot /> <p>{timeDuration}</p>{' '}
                    </ViewsSection>
                  </TrendingDescriptionMobileContainer>
                </TrendingMobileDescription>
              </TrendingContent>
            </ListItem>
          </LinkItem>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingVideoCard

//
