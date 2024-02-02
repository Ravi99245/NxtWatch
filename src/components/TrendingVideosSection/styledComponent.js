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

export const FailureImage = styled.img`
  width: 30%;
`
export const FailureContainer = styled.div`
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  line-height: 1.5;
  min-height: 90vh;
`
export const FailedHeading = styled.h1`
  font-size: 25px;
  margin: 0px;
`
export const FailedDescription = styled.p`
  font-size: 18px;
  color: #475569;
  font-weight: 500;
  text-align: center;
  margin: 0px;
`
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-weight: 500;
  padding: 12px 22px 12px 22px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  min-width: 80px;
  margin: 0px;
  margin-top: 5px;
`
