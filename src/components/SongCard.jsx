import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../reducers/features/playerFilter'
import Dropdown from './Dropdown'
import Element from './DropdownElement'

import SongcardStyle from './SongCard.module.css'

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    // const currentSongs = data.tracks
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  return (
    <div className={SongcardStyle.songCardContainer}>
      <div className={SongcardStyle.songMenu}>
        <Dropdown>
          <Element song={song} />
        </Dropdown>
      </div>
      <div className={SongcardStyle.song}>
        <div className={SongcardStyle.songTitle}>
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

      <div className={SongcardStyle.songMeta}>
        <p className={SongcardStyle.songHead}>
          <Link to={`/songs/${song?.key}`} style={{ color: 'white' }}>
            {song.title}
          </Link>
        </p>
        <p className={SongcardStyle.songArtist}>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
            style={{ color: 'white' }}
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SongCard
