import React, { useState } from 'react'
import Login from './Login'
import StreamPlayer from './StreamPlayer'
import CorruptedOverlay from './CorruptedOverlay'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [corrupted, setCorrupted] = useState(false)

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <StreamPlayer onCorrupt={() => setCorrupted(true)} />
      )}
      {corrupted && <CorruptedOverlay />}
    </div>
  )
}

export default App