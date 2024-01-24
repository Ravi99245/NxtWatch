import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {MdBrightness4, MdWbSunny, MdMenu, MdHome} from 'react-icons/md'
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
} from './styledComponent'

class Header extends Component {
  state = {activeFilter: 'home'}

  UpdateActivePage = () => {
    const {activeFilter} = this.state
    this.setState({activeFilter: 'home'}, console.log(activeFilter))
  }

  render() {
    const {activeFilter} = this.state
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
                          <li onClick={this.UpdateActivePage}>
                            <MdHome size={25} />
                            <p>Home</p>
                          </li>
                        </FiltersList>
                      </FiltersContainer>
                    </PopupContainer>
                  )}
                </Popup>
                <MobileLogoutButton type="button" aria-label="logout">
                  <FiLogOut size={28} />
                </MobileLogoutButton>
                <LogoutButton
                  type="button"
                  aria-label="logout"
                  isLightModeOn={isLightModeOn}
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
