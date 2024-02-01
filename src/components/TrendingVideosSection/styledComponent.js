import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

export const TrendingContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isLightModeOn ? '#f1f1f1' : '#0f0f0f')};
  overflow-y: auto;
  font-family: 'Roboto';
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  min-height: 80vh;
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
`
export const FireIcon = styled(FaFire)`
  color: #ff0000;
`
export const FireIConContainer = styled.div`
  background-color: ${props => (props.isLightModeOn ? '#d7dfe9' : '#000000')};
  border-radius: 50px;
  padding: 15px;
  margin-right: 20px;
`
export const LoaderContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TrendingVideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding: 0px;
  }
`
export const TrendingContent = styled.div`
  width: 100%;
`
