import React from 'react'
import Songbar from './Songbar'
import RelatedArtistStyle from './RelatedArtist.module.css'

const RelatedArtistsSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className={RelatedArtistStyle.relatedSongsContainer}>
      <h2 className={RelatedArtistStyle.relatedSongsHead}>Related Songs:</h2>
      <div className={RelatedArtistStyle.relatedSongbar}>
        {data?.map((song, i) => (
          <Songbar
            key={`${song.key}-${artistId}-${i}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            artistId={artistId}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedArtistsSongs
