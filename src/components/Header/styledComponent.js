import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'
import {MdHome, MdPlaylistAdd, MdWbSunny} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'

export const LinkElement = styled(Link)`
  text-decoration: none;
  color: #181818;
`

export const NavBar = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.isLightModeOn ? '#181818' : '#f9f9f9')};
  height: 10vh;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`

export const NxtWatchLogo = styled.img`
  width: 35%;
`

export const Profile = styled.img`
  width: 35px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  width: 20%;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
`
export const LogoutButton = styled.button`
  color: ${props => (props.isLightModeOn ? '#3b82f6' : '#ffffff')};
  background-color: transparent;
  border: 1px solid ${props => (props.isLightModeOn ? '#3b82f6' : '#ffffff')};
  border-radius: 2px;
  font-size: 15px;
  padding: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  width: 80px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  @media screen and (max-width: 576px) {
    width: 70%;
  }
`

export const PopupButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  min-height: 50vh;
  width: 75vw;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

export const MobileLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  @media screen and (min-width: 769px) {
    display: none;
  }
`

export const FiltersContainer = styled.div`
  width: 100%;
`

export const FiltersList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isActive ? '#f1f5f9' : '#ffffff')};
  width: 100%;
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 'bold' : 200)};
  padding: 5px;
`
export const StyledHomeIcon = styled(MdHome)`
  color: ${props => (props.active === 'true' ? '#ff0000' : '')};
`

export const StyledFireIcon = styled(FaFire)`
  color: ${props => (props.active === 'true' ? '#ff0000' : '')};
`
export const StyledGamingIcon = styled(SiYoutubegaming)`
  color: ${props => (props.active === 'true' ? '#ff0000' : '')};
`
export const StyledSavedIcon = styled(MdPlaylistAdd)`
  color: ${props => (props.active === 'true' ? '#ff0000' : '')};
`

export const LightModeIcon = styled(MdWbSunny)`
  color: #ffffff;
  font-size: 30px;
`

export const FilterItem = styled.p`
  font-size: 20px;
  margin-left: 12px;
  font-family: 'Roboto';
  font-weight: 500;
`
