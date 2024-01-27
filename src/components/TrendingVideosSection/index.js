import {FaFire} from 'react-icons/fa'

import WatchContext from '../../context/WatchContext'

import {TrendingContainer, HeadingContainer} from './styledComponent'

const TrendingVideosSection = () => {
  const url = 'https://apis.ccbp.in/videos/trending'

  return (
    <WatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <TrendingContainer isLightModeOn={isLightModeOn}>
            <div>
              <div>
                <FaFire />
              </div>
              <h1>Trending</h1>
            </div>
          </TrendingContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default TrendingVideosSection
