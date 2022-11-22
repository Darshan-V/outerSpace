import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs'

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
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs?.length && (
      <MdSkipPrevious className="cursor-pointer" onClick={handlePrevSong} />
    )}
    {isPlaying ? (
      <BsFillPauseFill onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill onClick={handlePlayPause} className="cursor-pointer" />
    )}
    {currentSongs?.length && (
      <MdSkipNext className="cursor-pointer" onClick={handleNextSong} />
    )}
    <BsShuffle
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
)

export default Controls
