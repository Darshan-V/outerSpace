import React from 'react'
import './RelatedSongs.css'
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
    <div className="relatedSongsContainer">
      <h2 className="relatedSongsHead">Related Songs:</h2>
      <div className="relatedSongbar">
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
