import Header from '../Header'
import Sidebar from '../Sidebar/index'
import SavedVideosSection from '../SavedVideosSection/index'

import WatchContext from '../../context/WatchContext'

import {SavedVideosContainer, SavedContent} from './styledComponent'

const SavedVideos = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightModeOn} = value
      return (
        <SavedVideosContainer
          data-testid="savedVideos"
          isLightModeOn={isLightModeOn}
        >
          <Header />
          <SavedContent>
            <Sidebar />
            <SavedVideosSection />
          </SavedContent>
        </SavedVideosContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideos
