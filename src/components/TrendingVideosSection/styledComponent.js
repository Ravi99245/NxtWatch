import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

export const TrendingContainer = styled.div`
  width: 75%;
  background-color: ${props => (props.isLightModeOn ? '#f1f1f1' : '#0f0f0f')};
`

export const HeadingContainer = styled.div`
  padding: 10px;
`
