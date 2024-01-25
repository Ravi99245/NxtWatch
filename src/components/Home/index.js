import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import Header from '../Header'
import Sidebar from '../Sidebar/index'

import {HomeContainer} from './styledComponent'

class Home extends Component {
  state = {}

  render() {
    return (
      <HomeContainer data-testid="home">
        <Header />
        <div>
          <Sidebar />
        </div>
      </HomeContainer>
    )
  }
}

export default Home
