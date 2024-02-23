import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ThumbnailImage = styled.img`
  width: 250px;
  @media screen and (max-width: 576px) {
    width: 180px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 200px;
  }
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
export const Title = styled.p`
  font-size: 18px;
  margin: 0px;
  font-weight: bold;
`

export const ViewCount = styled.p`
  font-size: 15px;
  margin: 0px;
  color: #475569;
`
