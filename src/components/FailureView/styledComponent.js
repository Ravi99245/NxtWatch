import styled from 'styled-components'

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
