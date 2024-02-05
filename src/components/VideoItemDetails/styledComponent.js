import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
`

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`
