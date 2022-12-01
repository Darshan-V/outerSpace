import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../reducers/features/playerFilter'
import Dropdown from './Dropdown'
import Element from './Element'

import './SongCard.css'

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    const currentSongs = data.tracks
    dispatch(setActiveSong({ song, data, currentSongs, i }))
    dispatch(playPause(true))
  }

  return (
    <div className="songCardContainer">
      <div className="songMenu">
        <Dropdown>
          <Element song={song} />
        </Dropdown>
      </div>
      <div className="song">
        <div className="songTitle">
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song?.images?.coverart} />
      </div>

      <div className="songMeta">
        <p className="songHead">
          <Link style={{ color: 'whitesmoke' }} to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="songArtist">
          <Link
            style={{ color: 'white' }}
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard
