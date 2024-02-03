import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

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
  LoginButton,
  ErrorMsg,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    passwordType: true,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  changePasswordType = () => {
    this.setState(prevState => ({passwordType: !prevState.passwordType}))
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
    const {password, passwordType} = this.state
    const type = passwordType ? 'password' : 'text'
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
                type={type}
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
              onChange={this.changePasswordType}
            />
            <CheckboxLabel isLightModeOn={isLightModeOn} htmlFor="checkbox">
              Show Password
            </CheckboxLabel>
          </CheckboxContainer>
        )
      }}
    </WatchContext.Consumer>
  )

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    console.log(this.props)
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
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
                  <LoginButton isLightModeOn={isLightModeOn} type="submit">
                    Login
                  </LoginButton>
                  {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
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
