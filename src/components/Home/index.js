import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import Header from '../Header'

class Home extends Component {
  state = {}

  render() {
    return <Header />
  }
}

export default Home
