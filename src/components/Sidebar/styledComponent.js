import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'

export const SideBarContainer = styled.div`
  width: 25%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  padding: 0px;
  background-color: transparent;
  width: 100%;
  padding-top: 10px;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => {
    if (props.isLightModeOn) {
      return props.isActive ? '#f1f5f9' : '#ffffff'
    }
    return props.isActive ? '#424242' : ''
  }};
  color: ${props => (props.isLightModeOn ? '#181818' : '#ffffff')};
  width: 100%;
  font-size: 16px;
  font-weight: ${props => (props.isActive ? 'bold' : 500)};
  padding: 5px;
  height: 50px;
  padding-left: 15px;
  width: 100%;
`

export const StyledHomeIcon = styled(MdHome)`
  color: ${props => {
    if (props.islightmodeon === 'true') {
      return props.active === 'true' ? '#ff0000' : ''
    }
    return props.active === 'true' ? '#ff0000' : '#cccccc'
  }};
`

export const StyledFireIcon = styled(FaFire)`
  color: ${props => {
    if (props.islightmodeon === 'true') {
      return props.active === 'true' ? '#ff0000' : ''
    }
    return props.active === 'true' ? '#ff0000' : '#cccccc'
  }};
`
export const StyledGamingIcon = styled(SiYoutubegaming)`
  color: ${props => {
    if (props.islightmodeon === 'true') {
      return props.active === 'true' ? '#ff0000' : ''
    }
    return props.active === 'true' ? '#ff0000' : '#cccccc'
  }};
`
export const StyledSavedIcon = styled(MdPlaylistAdd)`
  color: ${props => {
    if (props.islightmodeon === 'true') {
      return props.active === 'true' ? '#ff0000' : ''
    }
    return props.active === 'true' ? '#ff0000' : '#cccccc'
  }};
`

export const FilterItem = styled.p`
  font-size: 20px;
  margin-left: 16px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const SocialLogo = styled.img`
  width: 40px;
  margin-right: 15px;
`

export const ContactUs = styled.h1`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const ContactDetailsContainer = styled.div`
  padding: 10px;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
`
export const Description = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  line-height: 1.5;
`
