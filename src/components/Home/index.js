import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar/index'
import Banner from '../Banner/index'
import AllVideosSection from '../AllVideosSection/index'
import WatchContext from '../../context/WatchContext'

import {HomeContainer, HomeContent, VideoContainer} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <HomeContainer data-testid="home" isLightModeOn={isLightModeOn}>
              <Header />
              <HomeContent>
                <Sidebar />
                <VideoContainer>
                  <Banner />
                  <AllVideosSection />
                </VideoContainer>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
