import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import WatchContext from './context/WatchContext'

import './App.css'

class App extends Component {
  state = {isLightModeOn: true}

  changeTheme = () => {
    this.setState(prevState => ({
      isLightModeOn: !prevState.isLightModeOn,
    }))
  }

  render() {
    const {isLightModeOn} = this.state
    return (
      <WatchContext.Provider
        value={{isLightModeOn, changeTheme: this.changeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
