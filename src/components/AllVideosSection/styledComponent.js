import styled from 'styled-components'

import {MdSearch} from 'react-icons/md'

export const AllVideosContainer = styled.div`
  min-height: 80vh;
  padding: 20px;
  padding-top: 10px;
  width: 100%;
  margin-top: 8px;
  background-color: ${props => (props.isLightModeOn ? '#f8fafc' : '#000000')};
  @media screen and (max-width: 768px) {
    padding: 8px;
    padding-left: 10px;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding-left: 0px;
  }
`

export const SearchElement = styled.input`
  width: 250px;
  border-radius: 0px;
  border: 1px solid #606060;
  padding-left: 10px;
  height: 30px;
  border-right-width: 0px;
  padding: 6px;
  width: 60%;
  color: ${props => (props.isLightModeOn ? '#1e293b' : '#ffffff')};
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 70%;
    padding-left: 5px;
  }
`
export const SearchButton = styled.button`
  background-color: transparent;
  border: 1px solid #606060;
  height: 30px;
  cursor: pointer;
  outline: none;
  width: 40px;
  background-color: ${props => (props.isLightModeOn ? '' : '#424242')};
`
export const SearchIcon = styled(MdSearch)`
  font-size: 15px;
  color: ${props => (props.light === 'true' ? '#181818' : '#cccccc')};
  width: 100%;
`
