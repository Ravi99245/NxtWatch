import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => (props.isLightModeOn ? '#475569' : '#ffffff')};
  width: 300px;
  min-height: 330px;
  font-family: 'Roboto';
`

export const ThumbnailImage = styled.img`
  width: 300px;
`
export const ChannelLogo = styled.img`
  width: 50px;
`
export const Title = styled.h1`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 6px;
`

export const VideoDescription = styled.div`
  margin-left: 6px;
  line-height: 1.5;
`
export const ChannelName = styled.p`
  margin: 0px;
  line-height: 1.5;
`
export const MiddleDot = styled.span`
  font-size: 1.2em;
`

export const ViewsCount = styled.p`
  font-size: 16px;
  margin: 0px;
  line-height: 1.5;
`
