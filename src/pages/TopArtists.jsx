import React from 'react'
import { ArtistCard, Loader } from '../components'
import { useGetTopChartsQuery } from '../reducers/services/shazamservice'
import './TopArtists.css'

const TopArtists = () => {
  const { data, isFetching } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading artists..." />

  return (
    <div className="topArtistsPage">
      <h2 className="topArtistsHead">Top Artist</h2>
      <div className="ArtistCardContainer">
        {data.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  )
}

export default TopArtists
