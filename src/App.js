import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingPage from './components/TrendingPage/index'
import GamingPage from './components/GamingPage/index'
import WatchContext from './context/WatchContext'

import './App.css'

class App extends Component {
  state = {isLightModeOn: true, currentPage: 'home'}

  changeTheme = () => {
    this.setState(prevState => ({
      isLightModeOn: !prevState.isLightModeOn,
    }))
  }

  changePage = pageName => {
    this.setState({currentPage: pageName})
  }

  render() {
    const {isLightModeOn, currentPage} = this.state
    return (
      <WatchContext.Provider
        value={{
          isLightModeOn,
          changeTheme: this.changeTheme,
          currentPage,
          changePage: this.changePage,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/trending" component={TrendingPage} />
          <Route exact path="/gaming" component={GamingPage} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
