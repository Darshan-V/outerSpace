import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'
import PlayPauseStyle from './PlayPause.module.css'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className={PlayPauseStyle.pauseIcon} onClick={handlePause} />
  ) : (
    <FaPlayCircle className={PlayPauseStyle.playIcon} onClick={handlePlay} />
  )

export default PlayPause
