import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  width: 80%;
  margin: 10px;
  margin-bottom: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
`
export const ThumbnailImage = styled.img`
  width: 350px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const MiddleDot = styled.span`
  font-size: 1.2em;
`
