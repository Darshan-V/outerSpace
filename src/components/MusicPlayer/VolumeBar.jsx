import React from 'react'
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from 'react-icons/bs'
import VolumebarStyle from './Volumebar.module.css'

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <div className={VolumebarStyle.volumeBar}>
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill onClick={() => setVolume(0)} />
    )}
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill onClick={() => setVolume(0)} />
    )}
    {value === 0 && <BsFillVolumeMuteFill onClick={() => setVolume(1)} />}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className={VolumebarStyle.volumeRange}
    />
  </div>
)

export default VolumeBar
