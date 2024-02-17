import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingPage from './components/TrendingPage/index'
import GamingPage from './components/GamingPage/index'
import VideoItemDetails from './components/VideoItemDetails/index'
import SavedVideos from './components/SavedVideos/index'
import WatchContext from './context/WatchContext'

import './App.css'

class App extends Component {
  state = {
    isLightModeOn: true,
    currentPage: 'home',
    savedVideos: [],
    showBanner: true,
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isLightModeOn: !prevState.isLightModeOn,
    }))
  }

  changePage = pageName => {
    this.setState({currentPage: pageName})
  }

  updateVideos = video => {
    const {savedVideos} = this.state
    const isAlreadyInTheLIst = savedVideos.some(
      eachItem => eachItem.id === video.id,
    )
    if (isAlreadyInTheLIst) {
      const updatedList = savedVideos.filter(
        eachItem => eachItem.id !== video.id,
      )
      this.setState({savedVideos: updatedList})
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
      }))
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {isLightModeOn, currentPage, savedVideos, showBanner} = this.state
    return (
      <WatchContext.Provider
        value={{
          isLightModeOn,
          changeTheme: this.changeTheme,
          currentPage,
          changePage: this.changePage,
          savedVideos,
          updateVideos: this.updateVideos,
          showBanner,
          closeBanner: this.closeBanner,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={TrendingPage} />
          <Route exact path="/gaming" component={GamingPage} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
