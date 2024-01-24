import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {MdDarkMode, MdLightMode} from 'react-icons/md'

import WatchContext from '../../context/WatchContext'

const Header = props => {
  const {history} = props
  console.log(history)

  return (
    <WatchContext.Consumer>
      {value => {
        const {isLightModeOn} = value
        const imageUrl = isLightModeOn
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        return (
          <nav>
            <div>
              <img src={imageUrl} alt="NxtWatch Logo" />
            </div>
            <div>{isLightModeOn ? <MdDarkMode /> : <MdLightMode />}</div>
          </nav>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default withRouter(Header)
