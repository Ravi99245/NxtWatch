import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingVideosSection from '../GamingVideosSection/index'

import WatchContext from '../../context/WatchContext'

import {
  GamingContainer,
  GamingContent,
  VideosContainer,
} from './styledComponent'

const GamingPage = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightModeOn} = value
      return (
        <GamingContainer isLightModeOn={isLightModeOn} data-testid="gaming">
          <Header />
          <GamingContent>
            <Sidebar />
            <VideosContainer>
              <GamingVideosSection />
            </VideosContainer>
          </GamingContent>
        </GamingContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default GamingPage
