import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader, SongCard } from '../components'
import { selectGenreListId } from '../reducers/features/playerFilter'
import { useGetSongByGenreQuery } from '../reducers/services/shazamservice'
import { genres } from '../assets/constants.js'
import TopArtists from './TopArtists'
import DiscoverStyles from './Discover.module.css'

const Discover = () => {
  const dispatch = useDispatch()
  const { genreListId } = useSelector((state) => state.player)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data, isFetching } = useGetSongByGenreQuery(genreListId || 'POP')

  if (isFetching) return <Loader title="Loading Top Charts" />

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title

  return (
    <div className={DiscoverStyles.Discover}>
      <TopArtists />
      <div className={DiscoverStyles.discoveredSongCard}>
        <div className={DiscoverStyles.discoverGenres}>
          <h2 className={DiscoverStyles.topchartsLabel}>
            Discover {genreTitle}
          </h2>
          <select
            className={DiscoverStyles.genreSelector}
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || 'POP'}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>
        <div className={DiscoverStyles.DiscoveredSongs}>
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
    </div>
  )
}

export default Discover
