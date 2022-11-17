import React from 'react'
import { connect } from 'react-redux'
import { setVolume } from '../actions'
import './css/ProgressBar.css'

// class ProgressBar extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { showTooltip: false }
//   }
//   render() {
const ProgressBar = (song) => {
  return (
    <div className="progress">
      <input
        type="range"
        min="0"
        max="100"
        className="slider"
        value={song.volume}
        onChange={(e) => song.setVolume(e.target.value)}
        onMouseEnter={(e) => e.setState({ showTooltip: true })}
        onMouseLeave={(e) => e.setState({ showTooltip: false })}
      />
      {song.showTooltip ? <span className="tooltip">{song.volume}</span> : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    volume: state.volume,
  }
}

export default connect(mapStateToProps, { setVolume })(ProgressBar)
