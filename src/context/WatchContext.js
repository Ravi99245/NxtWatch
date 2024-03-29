import React from 'react'

const WatchContext = React.createContext({
  isLightModeOn: true,
  changeTheme: () => {},
  currentPage: 'home',
  changePage: () => {},
  savedVideos: [],
  updateVideos: () => {},
  showBanner: true,
  closeBanner: () => {},
})

export default WatchContext
