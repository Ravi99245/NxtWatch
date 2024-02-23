import Header from '../Header'
import Sidebar from '../Sidebar'
import WatchContext from '../../context/WatchContext'

import {
  NotFoundContainer,
  ContentContainer,
  NotFoundImage,
  DescriptionContainer,
  NotFoundDescription,
} from './styledComponent'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isLightModeOn} = value
      const imageUrl = isLightModeOn
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <NotFoundContainer isLightModeOn={isLightModeOn}>
          <Header />
          <ContentContainer isLightModeOn={isLightModeOn}>
            <Sidebar />
            <DescriptionContainer>
              <NotFoundImage src={imageUrl} alt="not-found" />
              <h1>Page Not Found</h1>
              <NotFoundDescription>
                We are sorry, the page you requested could not be found
              </NotFoundDescription>
            </DescriptionContainer>
          </ContentContainer>
        </NotFoundContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound
