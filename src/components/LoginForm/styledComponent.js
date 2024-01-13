import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isLightModeOn ? '#ffffff' : '#181818')};
`

export const LoginFormContainer = styled.div`
  width: 40%;
  height: 50vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  align-items: center;
`

export const WebsiteLogoUrl = styled.img`
  width: 40%;
  margin-bottom: 20px;
`
