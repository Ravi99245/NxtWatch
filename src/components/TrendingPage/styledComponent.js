import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
`

export const Heading = styled.h1`
  font-family: 'Roboto';
`
export const TrendingContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
export const VideoContainer = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    padding-top: 5px;
    width: 100%;
  }
`
