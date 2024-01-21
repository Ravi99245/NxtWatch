import {Component} from 'react'
import Cookies from 'js-cookie'
import {Readirect} from 'react-router-dom'

import WatchContext from '../../context/WatchContext'
import {
  MainContainer,
  LoginFormContainer,
  WebsiteLogoUrl,
  LabelElement,
  InputContainer,
  InputElement,
  Form,
  CheckBoxElement,
  CheckboxLabel,
  CheckboxContainer,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    showSubmitError: false,
    errorMsg: '',
    isLightModeOn: false,
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
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <InputContainer>
              <LabelElement isLightModeOn={isLightModeOn} htmlFor="username">
                USERNAME
              </LabelElement>
              <InputElement
                type="text"
                id="username"
                className="username-input-field"
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
              />
            </InputContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <InputContainer>
              <LabelElement isLightModeOn={isLightModeOn} htmlFor="password">
                PASSWORD
              </LabelElement>
              <InputElement
                type="password"
                id="password"
                className="password-input-field"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />
            </InputContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderCheckboxField = () => (
    <WatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        return (
          <CheckboxContainer>
            <CheckBoxElement
              isLightModeOn={isLightModeOn}
              type="checkbox"
              id="checkbox"
            />
            <CheckboxLabel htmlFor="checkbox">Show Password</CheckboxLabel>
          </CheckboxContainer>
        )
      }}
    </WatchContext.Consumer>
  )

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
              <LoginFormContainer isLightModeOn={isLightModeOn}>
                <WebsiteLogoUrl src={imageUrl} alt="website logo" />
                <Form onSubmit={this.onSubmit}>
                  {this.renderUsernameField()}
                  {this.renderPasswordField()}
                  {this.renderCheckboxField()}
                </Form>
              </LoginFormContainer>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default LoginForm
