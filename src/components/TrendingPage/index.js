import Header from '../Header'
import Sidebar from '../Sidebar/index'
import TrendingVideosSection from '../TrendingVideosSection/index'

import WatchContext from '../../context/WatchContext'
import {
  TrendingContainer,
  TrendingContent,
  VideoContainer,
} from './styledComponent'

const TrendingPage = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightModeOn} = value
      return (
        <TrendingContainer data-testid="trending" isLightModeOn={isLightModeOn}>
          <Header />
          <TrendingContent>
            <Sidebar />
            <VideoContainer>
              <TrendingVideosSection />
            </VideoContainer>
          </TrendingContent>
        </TrendingContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default TrendingPage
