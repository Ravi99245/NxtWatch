import TrendingVideoCard from '../TrendingVideoCard'

import WatchContext from '../../context/WatchContext'

import {
  HeadingContainer,
  FireIcon,
  FireIConContainer,
  SavedContent,
  NoVideosImage,
  NoVideosContainer,
  NoVideosDescription,
  TrendingVideosList,
} from './styledComponent'

const SavedVideosSection = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightModeOn, savedVideos} = value
      const l = savedVideos.length
      return (
        <SavedContent isLightModeOn={isLightModeOn}>
          <HeadingContainer isLightModeOn={isLightModeOn}>
            <FireIConContainer isLightModeOn={isLightModeOn}>
              <FireIcon size={35} />
            </FireIConContainer>
            <h1>Saved Videos</h1>
          </HeadingContainer>
          {l === 0 ? (
            <NoVideosContainer isLightModeOn={isLightModeOn}>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <h1>No saved videos found</h1>
              <NoVideosDescription>
                You can save your videos while watching them
              </NoVideosDescription>
            </NoVideosContainer>
          ) : (
            <TrendingVideosList isLightModeOn={isLightModeOn}>
              {savedVideos.map(eachItem => (
                <TrendingVideoCard key={eachItem.id} card={eachItem} />
              ))}
            </TrendingVideosList>
          )}
        </SavedContent>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideosSection
