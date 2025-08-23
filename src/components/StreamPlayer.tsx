import React, { useState } from 'react'
import ChatBox from './ChatBox'

type Props = {
  onCorrupt: () => void
}

const StreamPlayer: React.FC<Props> = ({ onCorrupt }) => {
  const [viewCount, setViewCount] = useState(238)
  // You will implement the "corruption" trigger after a certain time or interaction

  return (
    <div className="stream-player">
      <div className="stream-header">
        <img src="/assets/logo.png" alt="Streamer avatar" className="avatar"/>
        <div>
          <h2>Let&apos;s Play: PeaceOut – The Game That Knows You</h2>
          <span className="live-badge">LIVE</span> <span>{viewCount} viewers</span>
        </div>
      </div>
      <video src="/assets/sample-stream.mp4" controls autoPlay />
      <ChatBox />
      {/* Add more UI here: likes, subs, recommended streams, etc. */}
      {/* Use useEffect to start corruption after a delay */}
      <button className="go-live" onClick={onCorrupt}>Go Live (Demo - Triggers Corruption)</button>
    </div>
  )
}

export default StreamPlayer