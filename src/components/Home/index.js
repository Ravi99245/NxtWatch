import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar/index'
import Banner from '../Banner/index'

import {HomeContainer, HomeContent, VideoContainer} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    return (
      <HomeContainer data-testid="home">
        <Header />
        <HomeContent>
          <Sidebar />
          <VideoContainer>
            <Banner />
          </VideoContainer>
        </HomeContent>
      </HomeContainer>
    )
  }
}

export default Home
