import styled from 'styled-components'
import ReactPlayer from 'react-player'

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

export const LoaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const VideoContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 25px;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  background-color: ${props => (props.isLightModeOn ? '#f1f5f9' : '#000000')};
`
export const ReactPlayerContainer = styled(ReactPlayer)`
  width: 100% !important;
  height: 80vh !important;
`
export const TitleHeading = styled.h1`
  font-size: 22px;
  font-weight: 500;
`
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ViewCountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 1.5;
  color: #475569;
  margin: 0px;
`

export const Views = styled.p`
  font-size: 16px;
  margin: 5px;
  font-weight: 500;
`

export const LikeButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`
