import React from 'react'
import TrackStyle from './Track.module.css'

const Track = ({ activeSong }) => (
  <div className={TrackStyle.trackContainer}>
    <div className={TrackStyle.trackImage}>
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className={TrackStyle.trackCover}
      />
    </div>
    <div className={TrackStyle.songPlayer}>
      <p className={TrackStyle.songHeadPlayer}>
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className={TrackStyle.songSubPlayer}>
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
)

export default Track
