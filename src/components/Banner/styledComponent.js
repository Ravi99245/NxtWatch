import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 38vh;
  width: 100%;
  padding: 30px;
  padding-left: 20px;
  padding-bottom: 5px;
  color: #1e293b;
  font-family: 'Roboto';
  display: ${props => (props.closeBanner ? 'none' : 'flex')};
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    background-position: center center;
    min-height: 28vh;
    padding-top: 6px;
    width: 100%;
    padding: 15px;
  }
`

export const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
  width: 50%;
  line-height: 1.5;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    width: 70%;
  }
`
export const NxtWatchLogo = styled.img`
  width: 130px;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`
export const GetButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  color: #1e293b;
  padding: 7px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 7px;
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const PremiumContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 50px;
  }
`

export const CloseIcon = styled(MdClose)`
  font-size: 23px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
