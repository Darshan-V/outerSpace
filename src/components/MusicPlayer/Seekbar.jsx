import React from 'react'
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from 'react-icons/bs'
import SeekbarStyle from './Seekbar.module.css'

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`

  return (
    <div className={SeekbarStyle.seekBarContainer}>
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className={SeekbarStyle.seekButton}
      >
        <BsFillSkipBackwardFill />
      </button>
      <p className={SeekbarStyle.seekLength}>
        {value === 0 ? '0:00' : getTime(value)}
      </p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className={SeekbarStyle.seekRange}
      />
      <p className={SeekbarStyle.seekTime}>
        {max === 0 ? '0:00' : getTime(max)}
      </p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className={SeekbarStyle.seekButton}
      >
        <BsFillSkipForwardFill />
      </button>
    </div>
  )
}

export default Seekbar
