import React from 'react'

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="trackContainer">
    <div className="trackImage">
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="trackCover"
      />
    </div>
    <div className="song">
      <p className="songHead">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="songSub">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
)

export default Track
