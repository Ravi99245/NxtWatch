import {Component} from 'react'

import WatchContext from '../../context/WatchContext'
import {
  BannerContainer,
  NxtWatchLogo,
  Description,
  GetButton,
  PremiumContent,
  CloseButton,
  CloseIcon,
} from './styledComponent'

class Banner extends Component {
  state = {closeBanner: false}

  closeBannerCard = () => {
    this.setState({closeBanner: true})
  }

  render() {
    const {closeBanner} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isLightModeOn} = value
          const nxtWatchLogo =
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <BannerContainer closeBanner={closeBanner}>
              <PremiumContent>
                <div>
                  <NxtWatchLogo src={nxtWatchLogo} alt="NxtWatch Logo" />
                  <Description>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </Description>
                </div>
                <GetButton
                  type="button"
                  aria-label="getItNow"
                  isLightModeOn={isLightModeOn}
                >
                  GET IT NOW
                </GetButton>
              </PremiumContent>
              <CloseButton
                type="button"
                aria-label="close"
                data-testid="close"
                onClick={this.closeBannerCard}
              >
                <CloseIcon />
              </CloseButton>
            </BannerContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Banner
