import {Component} from 'react'

import WatchContext from '../../context/WatchContext'

import {
  SideBarContainer,
  LinkItem,
  ListItem,
  StyledHomeIcon,
  StyledFireIcon,
  StyledGamingIcon,
  StyledSavedIcon,
  FilterItem,
  UnorderedList,
  SocialLogo,
  ContactUs,
  ContactDetailsContainer,
  Description,
} from './styledComponent'

class Sidebar extends Component {
  state = {}

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn, currentPage, changePage} = value
          const updateContextPageToHome = () => {
            changePage('home')
          }
          const updateContextPageToTrend = () => {
            changePage('trending')
          }
          const updateContextPageToGame = () => {
            changePage('gaming')
          }
          const updateContextPageToSave = () => {
            changePage('saved')
          }
          return (
            <SideBarContainer isLightModeOn={isLightModeOn}>
              <UnorderedList isLightModeOn={isLightModeOn}>
                <LinkItem to="/">
                  <ListItem
                    isLightModeOn={isLightModeOn}
                    isActive={currentPage === 'home'}
                    onClick={updateContextPageToHome}
                  >
                    <StyledHomeIcon
                      size={22}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={currentPage === 'home' ? 'true' : 'false'}
                    />
                    <FilterItem>Home</FilterItem>
                  </ListItem>
                </LinkItem>
                <LinkItem to="/trending">
                  <ListItem
                    isActive={currentPage === 'trending'}
                    isLightModeOn={isLightModeOn}
                    onClick={updateContextPageToTrend}
                  >
                    <StyledFireIcon
                      size={22}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={currentPage === 'trending' ? 'true' : 'false'}
                    />
                    <FilterItem>Trending</FilterItem>
                  </ListItem>
                </LinkItem>
                <LinkItem to="/gaming">
                  <ListItem
                    isActive={currentPage === 'gaming'}
                    isLightModeOn={isLightModeOn}
                    onClick={updateContextPageToGame}
                  >
                    <StyledGamingIcon
                      size={22}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={currentPage === 'gaming' ? 'true' : 'false'}
                    />
                    <FilterItem>Gaming</FilterItem>
                  </ListItem>
                </LinkItem>
                <LinkItem to="/saved-videos">
                  <ListItem
                    isActive={currentPage === 'saved'}
                    isLightModeOn={isLightModeOn}
                    onClick={updateContextPageToSave}
                  >
                    <StyledSavedIcon
                      size={22}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={currentPage === 'saved' ? 'true' : 'false'}
                    />
                    <FilterItem>Saved videos</FilterItem>
                  </ListItem>
                </LinkItem>
              </UnorderedList>
              <ContactDetailsContainer isLightModeOn={isLightModeOn}>
                <ContactUs>CONTACT US</ContactUs>
                <div>
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                    alt="linked in logo"
                  />
                </div>
                <Description>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </ContactDetailsContainer>
            </SideBarContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Sidebar
