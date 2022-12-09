import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { playPause, setActiveSong } from '../reducers/features/playerFilter'
import { DetailsHeader, Loader, RelatedSongs } from '../components'
import {
  useGetSongRelatedQuery,
  useGetSongDetailsQuery,
  useGetArtistDetailsQuery,
} from '../reducers/services/shazamservice'

const SongDetails = () => {
  const dispatch = useDispatch()
  const { songid, id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching: isFetchingRelatedSongs } = useGetSongRelatedQuery({
    songid,
  })
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid })

  const { data: artistData, isFetching: isFetchingArtistDetails } =
    useGetArtistDetailsQuery({ artistId })

  if (
    isFetchingRelatedSongs &&
    isFetchingSongDetails &&
    isFetchingArtistDetails
  )
    return <Loader title="Searching song details..." />

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    const currentSongs = data
    dispatch(setActiveSong({ song, data, currentSongs, i }))
    dispatch(playPause(true))
  }
  return (
    <div className="detailsContainer">
      <DetailsHeader
        artistId={artistId}
        artistData={artistData}
        songData={songData}
      />
      <div className="relatedSongsContainer">
        <RelatedSongs
          data={data}
          artistId={artistId}
          artistData={artistData}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlay={handlePlayClick}
          handlePause={handlePauseClick}
        />
      </div>
    </div>
  )
}

export default SongDetails
