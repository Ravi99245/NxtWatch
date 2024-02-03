import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ThumbnailImage = styled.img`
  width: 250px;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
`

export const ListItem = styled.li`
  margin: 6px;
  font-family: 'Roboto';
  line-height: 1.5;
  margin-bottom: 25px;
`
export const Title = styled.h1`
  font-size: 18px;
  margin: 0px;
`

export const ViewCount = styled.p`
  font-size: 15px;
  margin: 0px;
  color: #475569;
`
