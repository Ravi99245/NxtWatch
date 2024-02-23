import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto';
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  text-align: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${props => (props.isLightModeOn ? '#f9f9f9' : '#000000')};
`
export const NotFoundImage = styled.img`
  width: 400px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`
export const NotFoundDescription = styled.p`
  color: #64748b;
  font-size: 25px;
  margin-top: 0px;
`
