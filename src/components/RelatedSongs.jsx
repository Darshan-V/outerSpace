import React from 'react'
import RelatedSongsStyle from './RelatedSongs.module.css'
import SongCard from './SongCard'

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className={RelatedSongsStyle.relatedSongsContainer}>
      <h2 className={RelatedSongsStyle.relatedSongsHead}>Related Songs:</h2>
      <div className={RelatedSongsStyle.relatedSongbar}>
        {data?.map((song, i) => (
          <SongCard
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

export default RelatedSongs
