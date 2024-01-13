import {Component} from 'react'
import Cookies from 'js-cookie'
import {Readirect} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'
import {
  MainContainer,
  LoginFormContainer,
  WebsiteLogoUrl,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isLightModeOn: true,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          const imageUrl = isLightModeOn
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          return (
            <MainContainer isLightModeOn={isLightModeOn}>
              <LoginFormContainer>
                <WebsiteLogoUrl src={imageUrl} alt="website logo" />
                <form onSubmit={this.onSubmit}>
                  <div className="input-container">
                    {this.renderUsernameField()}
                  </div>
                  <div className="input-container">
                    {this.renderPasswordField()}
                  </div>
                </form>
              </LoginFormContainer>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default LoginForm
