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

  render() {
    const {activeFilter} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          return (
            <SideBarContainer>
              <UnorderedList>
                <LinkItem to="/">
                  <ListItem
                    isLightModeOn={isLightModeOn}
                    isActive={activeFilter === 'home'}
                    onClick={this.UpdateActivePageToHome}
                  >
                    <StyledHomeIcon
                      size={25}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={activeFilter === 'home' ? 'true' : 'false'}
                    />
                    <FilterItem>Home</FilterItem>
                  </ListItem>
                </LinkItem>
                <LinkItem to="/">
                  <ListItem
                    isActive={activeFilter === 'trending'}
                    isLightModeOn={isLightModeOn}
                    onClick={this.UpdateActivePageToTrend}
                  >
                    <StyledFireIcon
                      size={25}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={activeFilter === 'trending' ? 'true' : 'false'}
                    />
                    <FilterItem>Trending</FilterItem>
                  </ListItem>
                </LinkItem>
                <LinkItem to="/">
                  <ListItem
                    isActive={activeFilter === 'gaming'}
                    isLightModeOn={isLightModeOn}
                    onClick={this.UpdateActivePageToGaming}
                  >
                    <StyledGamingIcon
                      size={25}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={activeFilter === 'gaming' ? 'true' : 'false'}
                    />
                    <FilterItem>Gaming</FilterItem>
                  </ListItem>
                </LinkItem>
                <LinkItem to="/">
                  <ListItem
                    isActive={activeFilter === 'saved'}
                    isLightModeOn={isLightModeOn}
                    onClick={this.UpdateActivePageToSaved}
                  >
                    <StyledSavedIcon
                      size={25}
                      islightmodeon={isLightModeOn ? 'true' : 'false'}
                      active={activeFilter === 'saved' ? 'true' : 'false'}
                    />
                    <FilterItem>Gaming</FilterItem>
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
