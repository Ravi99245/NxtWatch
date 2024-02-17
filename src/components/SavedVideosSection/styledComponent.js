import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const SavedContent = styled.div`
  width: 100%;
  min-height: 80vh;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  font-family: 'Roboto';
`

export const HeadingContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isLightModeOn ? '#ebebeb' : '#231f20')};
  padding: 20px;
  padding-left: 35px;
  width: 100%;
  @media screen and (max-width: 769px) {
    font-size: 15px;
  }
`

export const FireIcon = styled(FaFire)`
  color: #ff0000;
  @media screen and (max-width: 768px) {
    width: 30px;
  }
`
export const FireIConContainer = styled.div`
  background-color: ${props => (props.isLightModeOn ? '#d7dfe9' : '#000000')};
  border-radius: 50px;
  padding: 15px;
  margin-right: 20px;
`
export const NoVideosImage = styled.img`
  width: 500px;
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`
export const NoVideosContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightModeOn ? '#f1f1f1' : '#0f0f0f')};
`
export const NoVideosDescription = styled.p`
  font-size: 25px;
  text-align: center;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding: 0px;
  }
`
