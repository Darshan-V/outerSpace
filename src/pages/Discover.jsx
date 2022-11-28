import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loader, SongCard } from '../components/index'
import { useGetSongByGenreQuery } from '../reducers/services/shazamservice'
import './Discover.css'

const Discover = () => {
  const dispatch = useDispatch()
  const { genreListId } = useSelector((state) => state.player)
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data, isFetching } = useGetSongByGenreQuery

  if (isFetching) return <Loader title="Loading Top Charts" />

  return (
    <div className="Discover">
      <h2 className="topchartsLabel">Discover Top Charts</h2>

      <div className="DiscoverSongsContainer">
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
