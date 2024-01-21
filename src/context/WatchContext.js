import React from 'react'

const WatchContext = React.createContext({
  isLightModeOn: false,
  changeTheme: () => {},
})

export default WatchContext
