import { connect } from 'react-redux'
import React from 'react'
import './css/SongTime.css'

const SongTime = (song) => {
  return (
    <div className="music-timer">
      <div
        className="completed"
        style={{
          width: `${(song.currentLocation / song.duration) * 100}%`,
        }}
      ></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    duration: state.duration,
    currentLocation: state.currentLocation,
  }
}

export default connect(mapStateToProps)(SongTime)
