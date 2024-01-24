import styled from 'styled-components'

export const NavBar = styled.nav`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  color: ${props => (props.isLightModeOn ? '#181818' : '#f9f9f9')};
  min-height: 10vh;
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
  justify-content: space-between;
  width: 25%;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`

export const PopupButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupContainer = styled.div`
  min-height: 50vh;
  width: 65vw;
  padding: 20px;
`

export const MobileLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const FiltersContainer = styled.div`
  width: 100%;
`

export const FiltersList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
