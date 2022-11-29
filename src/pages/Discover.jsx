import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader, SongCard } from '../components'
import { selectGenreListId } from '../reducers/features/playerFilter'
import { useGetSongByGenreQuery } from '../reducers/services/shazamservice'
import { genres } from '../assets/constants.js'
import './Discover.css'

const Discover = () => {
  const dispatch = useDispatch()
  const { genreListId } = useSelector((state) => state.player)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data, isFetching } = useGetSongByGenreQuery(genreListId || 'POP')

  if (isFetching) return <Loader title="Loading Top Charts" />

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title

  return (
    <div className="Discover">
      <div className="discoverGenres">
        <h2 className="topchartsLabel">Discover {genreTitle}</h2>
        <div className="leftArrow">
          <i className="arrow left"></i>
        </div>
        <div className="rightArrow">
          <i className="arrow right"></i>
        </div>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'POP'}
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
