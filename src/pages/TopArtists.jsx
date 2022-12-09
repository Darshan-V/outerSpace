import React from 'react'
import { ArtistCard, Loader } from '../components'
import { useGetTopChartsQuery } from '../reducers/services/shazamservice'
import TopArtistStyle from './TopArtists.module.css'

const TopArtists = () => {
  const { data, isFetching } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading artists..." />

  return (
    <div className={TopArtistStyle.topArtistsPage}>
      <h2 className={TopArtistStyle.topArtistsHead}>Top Artist</h2>
      <div className={TopArtistStyle.ArtistCardContainer}>
        {data.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  )
}

export default TopArtists
