import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

export const LikeIcon = styled(BiLike)`
  font-size: 22px;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export const DisLikeIcon = styled(BiDislike)`
  font-size: 22px;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
export const SavedIcon = styled(MdPlaylistAdd)`
  font-size: 22px;
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

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
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    padding: 0px;
  }
`
export const ReactPlayerContainer = styled(ReactPlayer)`
  width: 100% !important;
  height: 80vh !important;
  @media screen and (max-width: 576px) {
    width: 100% !important;
    height: 40vh !important;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100% !important;
    height: 45vh !important;
  }
`
export const TitleHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 21px;
    padding: 15px;
    margin-bottom: 0px;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0px;
    padding: 15px;
    padding-top: 0px;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 21px;
    font-weight: 600;
  }
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
  @media screen and (max-width: 768px) {
    line-height: 1;
    font-size: 50px;
  }
`

export const Line = styled.hr`
  border-color: ${props => (props.isLightModeOn ? '#606060' : '#1e293b')};
  width: 98%;
`
export const ProfileImage = styled.img`
  width: 60px;
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`

export const ChannelName = styled.p`
  font-size: 23px;
  font-weight: 500;
  margin-top: 0px;
`
export const Subscribers = styled.p`
  font-size: 18px;
  color: #94a3b8;
`
export const Description = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (min-width: 769px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    color: #1e293b;
  }
`

export const LargeDescription = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SubscribersContainer = styled.div`
  padding: 15px;
`

export const MobileDescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
