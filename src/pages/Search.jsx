import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Loader, SongCard } from '../components'
import { useGetSongsBySearchQuery } from '../reducers/services/shazamservice'
import './Search.css'

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits.map((song) => song.track)

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />

  return (
    <div className="searchDiv">
      <h2 className="searchHead">
        Showing results for <span className="droppedResult">{searchTerm}</span>
      </h2>

      <div className="searchedSongsContainer">
        {songs.map((song, i) => (
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

export default Search
