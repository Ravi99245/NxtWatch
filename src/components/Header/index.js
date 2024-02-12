import {Component} from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {MdBrightness4, MdMenu} from 'react-icons/md'
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
  LightModeIcon,
  StyledCloseIcon,
  CloseContainer,
  CloseButton,
} from './styledComponent'

class Header extends Component {
  state = {}

  onClickLogout = () => {
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn, changePage, changeTheme, currentPage} = value
          console.log(isLightModeOn)
          const updateContextPageToHome = () => {
            changePage('home')
          }
          const updateContextPageToTrend = () => {
            console.log('clicked')
            changePage('trending')
          }
          const updateContextPageToGame = () => {
            changePage('gaming')
          }
          const updateContextPageToSave = () => {
            changePage('saved')
          }
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
                    <LightModeIcon />
                  </ThemeButton>
                )}
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  trigger={
                    <PopupButton
                      type="button"
                      aria-label="popup"
                      isLightModeOn={isLightModeOn}
                    >
                      <MdMenu size={30} />
                    </PopupButton>
                  }
                  modal
                  position="top-right"
                >
                  {close => (
                    <PopupContainer isLightModeOn={isLightModeOn}>
                      <CloseContainer>
                        <CloseButton
                          type="button"
                          aria-label="close"
                          onClick={() => close()}
                        >
                          <StyledCloseIcon
                            size={35}
                            isLightModeOn={isLightModeOn}
                          />
                        </CloseButton>
                      </CloseContainer>
                      <FiltersContainer>
                        <FiltersList isLightModeOn={isLightModeOn}>
                          <LinkElement to="/">
                            <ListItem
                              isLightModeOn={isLightModeOn}
                              onClick={updateContextPageToHome}
                              isActive={currentPage === 'home'}
                            >
                              <StyledHomeIcon
                                size={25}
                                islightmodeon={isLightModeOn ? 'true' : 'false'}
                                active={
                                  currentPage === 'home' ? 'true' : 'false'
                                }
                              />
                              <FilterItem isLightModeOn={isLightModeOn}>
                                Home
                              </FilterItem>
                            </ListItem>
                          </LinkElement>
                          <LinkElement to="/trending">
                            <ListItem
                              onClick={updateContextPageToTrend}
                              isLightModeOn={isLightModeOn}
                              isActive={currentPage === 'trending'}
                            >
                              <StyledFireIcon
                                size={25}
                                islightmodeon={isLightModeOn ? 'true' : 'false'}
                                active={
                                  currentPage === 'trending' ? 'true' : 'false'
                                }
                              />
                              <FilterItem isLightModeOn={isLightModeOn}>
                                Trending
                              </FilterItem>
                            </ListItem>
                          </LinkElement>
                          <LinkElement to="/gaming">
                            <ListItem
                              onClick={updateContextPageToGame}
                              isLightModeOn={isLightModeOn}
                              isActive={currentPage === 'gaming'}
                            >
                              <StyledGamingIcon
                                size={25}
                                islightmodeon={isLightModeOn ? 'true' : 'false'}
                                active={
                                  currentPage === 'gaming' ? 'true' : 'false'
                                }
                              />
                              <FilterItem isLightModeOn={isLightModeOn}>
                                Gaming
                              </FilterItem>
                            </ListItem>
                          </LinkElement>
                          <LinkElement to="/saved-videos">
                            <ListItem
                              onClick={updateContextPageToSave}
                              isLightModeOn={isLightModeOn}
                              isActive={currentPage === 'saved'}
                            >
                              <StyledSavedIcon
                                size={25}
                                islightmodeon={isLightModeOn ? 'true' : 'false'}
                                active={
                                  currentPage === 'saved' ? 'true' : 'false'
                                }
                              />
                              <FilterItem isLightModeOn={isLightModeOn}>
                                Saved Videos
                              </FilterItem>
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
                  isLightModeOn={isLightModeOn}
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
