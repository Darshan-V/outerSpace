import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DetailsHeader, Loader, RelatedArtistsSongs } from '../components'

import { useGetArtistDetailsQuery } from '../reducers/services/shazamservice'

const ArtistDetails = () => {
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data: artistData, isFetching: isFetchingArtistDetails } =
    useGetArtistDetailsQuery(artistId)

  if (isFetchingArtistDetails) {
    return <Loader title="Loading Artist details..." />
  }

  console.log(artistData.data[0].views['top-songs'].data)

  return (
    <div className="ArtistDetailsContainer">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      <RelatedArtistsSongs
        data={Object.values(artistData?.data[0]?.views['top-songs']?.data)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  )
}

export default ArtistDetails
