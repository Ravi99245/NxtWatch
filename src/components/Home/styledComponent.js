import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#181818')};
`
export const HomeContent = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const VideoContainer = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
  @media screen and (max-width: 768px) {
    padding: 15px;
    padding-top: 5px;
    width: 100%;
  }
`
