import styled from 'styled-components'

export const GamingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
`

export const GamingContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideosContainer = styled.div`
  width: 80%;
`
