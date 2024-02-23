import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  width: 80%;
  margin-bottom: 5px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    margin-left: 15px;
  }
`

export const ViewsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  width: 100%;
`
export const ThumbnailContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const TrendingContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 250px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`
export const TrendingDescriptionContainer = styled.div`
  width: 50%;
  height: 200px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const TrendingTitle = styled.p`
  font-size: 20px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Name = styled.p`
  margin: 0px;
  line-height: 1.5;
  font-size: 16px;
  margin-top: 10px;
  color: ${props => (props.isLightModeOn ? '#475569' : '#ffffff')};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 1;
    margin: 0px;
  }
`

export const ViewCount = styled.p`
  line-height: 1.5;
  margin-top: 6px;
  font-size: 16px;
  color: ${props => (props.isLightModeOn ? '#475569' : '#ffffff')};
  margin: 0px;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`
export const ProfileImage = styled.img`
  width: 60px;
  margin-right: 15px;
  margin-left: 10px;
`
export const TrendingMobileTitle = styled.h1`
  font-size: 15px;
  margin-bottom: 0px;
`
export const TrendingMobileDescription = styled.div`
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 1;
  padding: 3px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const TrendingDescriptionMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
`
