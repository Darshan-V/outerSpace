import React from 'react'
import './Track.css'

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="trackContainer">
    <div className="trackImage">
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="trackCover"
      />
    </div>
    <div className="songPlayer">
      <p className="songHeadPlayer">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="songSubPlayer">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
)

export default Track
