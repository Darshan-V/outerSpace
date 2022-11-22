import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle className="pauseIcon" onClick={handlePause} />
  ) : (
    <FaPlayCircle className="playIcon" onClick={handlePlay} />
  )

export default PlayPause
