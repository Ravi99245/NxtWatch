import React from 'react'

const WatchContext = React.createContext({
  isLightModeOn: true,
  changeTheme: () => {},
})

export default WatchContext
