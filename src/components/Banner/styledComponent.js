import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 36vh;
  width: 100%;
  padding: 30px;
  padding-left: 20px;
  color: #1e293b;
  font-family: 'Roboto';
  display: ${props => (props.closeBanner ? 'none' : 'flex')};
  align-items: flex-start;
  justify-content: space-between;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 50%;
  line-height: 1.5;
  margin-top: 5px;
`
export const NxtWatchLogo = styled.img`
  width: 150px;
`
export const GetButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  color: #1e293b;
  padding: 7px;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
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
`
