import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
`

export const SavedContent = styled.div`
  display: flex;
  width: 100%;
`
