import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs'
import ControlsStyles from './Controls.module.css'

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
  <div className={ControlsStyles.controllersContainer}>
    <BsArrowRepeat
      color={repeat ? 'green' : 'white'}
      onClick={() => setRepeat((prev) => !prev)}
      className={ControlsStyles.repeatButton}
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        className={ControlsStyles.playPrev}
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        onClick={handlePlayPause}
        className={ControlsStyles.pause}
      />
    ) : (
      <BsFillPlayFill
        onClick={handlePlayPause}
        className={ControlsStyles.play}
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        className={ControlsStyles.playNext}
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      color={shuffle ? 'green' : 'white'}
      onClick={() => setShuffle((prev) => !prev)}
      className={ControlsStyles.shuffle}
    />
  </div>
)

export default Controls
