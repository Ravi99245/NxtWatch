import WatchContext from '../../context/WatchContext'

import {
  FailureImage,
  FailureContainer,
  FailedHeading,
  FailedDescription,
  RetryButton,
} from './styledComponent'

const FiledView = props => {
  const {retryEverything} = props
  const retry = () => {
    retryEverything()
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        const failedImageUrl = isLightModeOn
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureContainer isLightModeOn={isLightModeOn}>
            <FailureImage src={failedImageUrl} alt="failure view" />
            <FailedHeading>Oops! Something Went Wrong</FailedHeading>
            <FailedDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailedDescription>
            <RetryButton type="button" aria-label="retry" onClick={retry}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default FiledView
