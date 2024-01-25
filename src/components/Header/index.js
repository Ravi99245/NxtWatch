import {Component} from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {MdBrightness4, MdWbSunny, MdMenu} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'

import WatchContext from '../../context/WatchContext'
import {
  NavBar,
  NxtWatchLogo,
  Profile,
  ThemeButton,
  LogoutButton,
  NavElements,
  PopupButton,
  MobileLogoutButton,
  PopupContainer,
  FiltersContainer,
  FiltersList,
  ListItem,
  StyledFireIcon,
  StyledHomeIcon,
  FilterItem,
  StyledGamingIcon,
  StyledSavedIcon,
  LinkElement,
} from './styledComponent'

class Header extends Component {
  state = {activeFilter: 'home'}

  UpdateActivePageToHome = () => {
    this.setState({activeFilter: 'home'})
  }

  UpdateActivePageToTrend = () => {
    this.setState({activeFilter: 'trending'})
  }

  UpdateActivePageToGaming = () => {
    this.setState({activeFilter: 'gaming'})
  }

  UpdateActivePageToSaved = () => {
    this.setState({activeFilter: 'saved'})
  }

  onClickLogout = () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {activeFilter} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn, changeTheme} = value
          console.log(isLightModeOn)
          const imageUrl = isLightModeOn
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          const changeBackGroundTheme = () => {
            changeTheme()
          }
          return (
            <NavBar isLightModeOn={isLightModeOn}>
              <div>
                <Link to="/">
                  <NxtWatchLogo src={imageUrl} alt="NxtWatch Logo" />
                </Link>
              </div>
              <NavElements>
                {isLightModeOn ? (
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    aria-label="theme"
                    isLightModeOn={isLightModeOn}
                    onClick={changeBackGroundTheme}
                  >
                    <MdBrightness4 size={30} />
                  </ThemeButton>
                ) : (
                  <ThemeButton
                    type="button"
                    data-testid="theme"
                    aria-label="theme"
                    isLightModeOn={isLightModeOn}
                    onClick={changeBackGroundTheme}
                  >
                    <MdWbSunny size={30} />
                  </ThemeButton>
                )}
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  trigger={
                    <PopupButton type="button" aria-label="popup">
                      <MdMenu size={30} />
                    </PopupButton>
                  }
                  modal
                  position="top-right"
                >
                  {close => (
                    <PopupContainer>
                      <FiltersContainer>
                        <FiltersList>
                          <LinkElement to="/">
                            <ListItem
                              onClick={this.UpdateActivePageToHome}
                              isActive={activeFilter === 'home'}
                            >
                              <StyledHomeIcon
                                size={25}
                                active={
                                  activeFilter === 'home' ? 'true' : 'false'
                                }
                              />
                              <FilterItem>Home</FilterItem>
                            </ListItem>
                          </LinkElement>
                          <LinkElement to="/trending">
                            <ListItem
                              onClick={this.UpdateActivePageToTrend}
                              isActive={activeFilter === 'trending'}
                            >
                              <StyledFireIcon
                                size={25}
                                active={
                                  activeFilter === 'trending' ? 'true' : 'false'
                                }
                              />
                              <FilterItem>Trending</FilterItem>
                            </ListItem>
                          </LinkElement>
                          <LinkElement to="/gaming">
                            <ListItem
                              onClick={this.UpdateActivePageToGaming}
                              isActive={activeFilter === 'gaming'}
                            >
                              <StyledGamingIcon
                                size={25}
                                active={
                                  activeFilter === 'gaming' ? 'true' : 'false'
                                }
                              />
                              <FilterItem>Trending</FilterItem>
                            </ListItem>
                          </LinkElement>
                          <LinkElement to="/saved-videos">
                            <ListItem
                              onClick={() => this.UpdateActivePageToSaved}
                              isActive={activeFilter === 'saved'}
                            >
                              <StyledSavedIcon
                                size={25}
                                active={
                                  activeFilter === 'saved' ? 'true' : 'false'
                                }
                              />
                              <FilterItem>Saved Videos</FilterItem>
                            </ListItem>
                          </LinkElement>
                        </FiltersList>
                      </FiltersContainer>
                    </PopupContainer>
                  )}
                </Popup>
                <MobileLogoutButton
                  type="button"
                  aria-label="logout"
                  onClick={this.onClickLogout}
                >
                  <FiLogOut size={28} />
                </MobileLogoutButton>
                <LogoutButton
                  type="button"
                  aria-label="logout"
                  isLightModeOn={isLightModeOn}
                  onClick={this.onClickLogout}
                >
                  Logout
                </LogoutButton>
              </NavElements>
            </NavBar>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
