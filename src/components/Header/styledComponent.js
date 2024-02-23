import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'
import {MdHome, MdPlaylistAdd, MdWbSunny, MdClose} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'

export const StyledCloseIcon = styled(MdClose)`
  color: ${props => (props.isLightModeOn ? '#181818' : '#ffffff')};
`

export const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

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
  height: 70vh;
  width: 75vw;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const FiltersList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
  color:${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')}
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => {
    if (props.isLightModeOn) {
      return props.isActive ? '#f1f5f9' : ''
    }
    return props.isActive ? '#424242' : ''
  }};
  width: 100%;
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 'bold' : 200)};
  padding: 5px;
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

export const LightModeIcon = styled(MdWbSunny)`
  color: #ffffff;
  font-size: 30px;
`

export const FilterItem = styled.p`
  font-size: 20px;
  margin-left: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
`

export const LogoutPopupContainer = styled.div`
  min-height: 22vh;
  width: 80vw;
  background-color: ${props => (props.isLightModeOn ? '#f1f5f9' : '#212121')};
  padding: 12px;
  border-radius: 10px;
  @media screen and (min-width: 769px) {
    width: 30vw;
    min-height: 20vh;
    padding: 16px;
  }
`

export const PopupTotalMenuContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PopupTotalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const LogOutHeading = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 14px;
  text-align: center;
  color: ${props => (props.isLightModeOn ? '#4f46e5' : '#ffffff')};
  @media screen and (min-width: 769px) {
    font-size: 18px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`

export const CancelButton = styled.button`
  font-size: 20px;
  background-color: transparent;
  padding: 8px;
  border: ${`1px solid #cbd5e1`};
  width: 120px;
  height: 60px;
  font-weight: bold;
  color: ${props => (props.isLightModeOn ? '#94a3b8' : '#94a3b8')};
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 769px) {
    font-size: 15px;
    padding: 4px;
    width: 90px;
    height: 40px;
  }
`
export const ConfirmButton = styled.button`
  padding: 8px;
  border: ${`1px solid #cbd5e1`};
  width: 120px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  background-color: #3b82f6;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 769px) {
    font-size: 15px;
    padding: 4px;
    width: 90px;
    height: 40px;
  }
`
