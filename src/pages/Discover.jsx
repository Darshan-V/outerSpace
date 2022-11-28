import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader, SongCard } from '../components/index'
import { selectGenreListId } from '../reducers/features/playerFilter'
import { useGetSongByGenreQuery } from '../reducers/services/shazamservice'
import { genres } from '../assets/utils'
import './Discover.css'

const Discover = () => {
  const dispatch = useDispatch()
  const { genreListId } = useSelector((state) => state.player)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data, isFetching } = useGetSongByGenreQuery

  if (isFetching) return <Loader title="Loading Top Charts" />

  const genreTitle = genres.find(({ value }) => value === genreListId).title

  return (
    <div className="Discover">
      <div className="discoverGenres">
        <h2 className="topchartsLabel">Discover {genreTitle}</h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="genreSelector"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="discoveredSongCard">
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Discover
