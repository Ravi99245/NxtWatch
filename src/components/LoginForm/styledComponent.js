import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: ${props => (props.isLightModeOn ? '#ffffff' : '#181818')};
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

export const LoginFormContainer = styled.div`
  width: 40%;
  min-height: 50vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  align-items: center;
  background-color: ${props => (props.isLightModeOn ? '#ffffff' : '#000000')};
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    padding-top: 20px;
    align-items: flex-start;
    justify-content: center;
  }
`

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`

export const WebsiteLogoUrl = styled.img`
  width: 40%;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    align-self: center;
    width: 60%;
  }
`

export const LabelElement = styled.label`
  margin-bottom: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.isLightModeOn ? '#181818' : '#ffffff')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 15px;
  }
`

export const InputElement = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #2c364c;
  background-color: transparent;
  border-radius: 2px;
  margin-top: 5px;
  padding: 10px 20px 10px 20px;
  outline: none;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: 35px;
  }
`
export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    padding-left: 15px;
  }
`

export const CheckBoxElement = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  outline: none;
`

export const CheckboxLabel = styled.label`
  color: ${props => (props.isLightModeOn ? '#181818' : '#ffffff')};
  font-size: 14px;
  margin-left: 4px;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
`

export const LoginButton = styled.button`
  width: 90%;
  background-color: #3b82f6;
  border: none;
  margin-top: 10px;
  height: 30px;
  color: #ffffff;
  border-radius: 5px;
  align-self: flex-start;
  margin-bottom: 10px;
  font-family: 'Roboto';
  height: 35px;
  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 0px;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`
