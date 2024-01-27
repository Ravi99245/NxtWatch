import React from 'react'

const WatchContext = React.createContext({
  isLightModeOn: true,
  changeTheme: () => {},
  currentPage: 'home',
  changePage: () => {},
})

export default WatchContext
