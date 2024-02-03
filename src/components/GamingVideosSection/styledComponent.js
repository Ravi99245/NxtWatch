import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingIcon = styled(SiYoutubegaming)`
  color: #ff0000;
`

export const FireIConContainer = styled.div`
  background-color: ${props => (props.isLightModeOn ? '#d7dfe9' : '#000000')};
  border-radius: 50px;
  padding: 16px;
  margin-right: 20px;
`

export const GamingVideosContainer = styled.div`
  width: 100%;
  font-family: 'Roboto';
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  font-family: 'Roboto';
`

export const HeadingContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isLightModeOn ? '#ebebeb' : '#231f20')};
  padding: 15px;
  padding-left: 35px;
  width: 100%;
  @media screen and (max-width: 769px) {
    font-size: 15px;
    padding: 12px;
  }
`

export const LoaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const VideosListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  overflow-y: auto;
  height: 80vh;
`

export const Heading = styled.h1`
  font-size: 35px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`
