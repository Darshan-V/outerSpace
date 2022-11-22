import React from 'react'

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`

  return (
    <div className="seekBarContainer">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="seekButton"
      >
        -
      </button>
      <p className="seekLength">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="seekRange"
      />
      <p className="seekTime">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="seekTimer"
      >
        +
      </button>
    </div>
  )
}

export default Seekbar