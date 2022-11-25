import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs'
import './Controls.css'

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="controllersContainer">
    <BsArrowRepeat
      onClick={() => setRepeat((prev) => !prev)}
      className="repeatButton"
    />
    {currentSongs?.length && (
      <MdSkipPrevious className="playPrev" onClick={handlePrevSong} />
    )}
    {isPlaying ? (
      <BsFillPauseFill onClick={handlePlayPause} className="pause" />
    ) : (
      <BsFillPlayFill onClick={handlePlayPause} className="play" />
    )}
    {currentSongs?.length && (
      <MdSkipNext className="playNext" onClick={handleNextSong} />
    )}
    <BsShuffle
      onClick={() => setShuffle((prev) => !prev)}
      className="shuffle"
    />
  </div>
)

export default Controls
