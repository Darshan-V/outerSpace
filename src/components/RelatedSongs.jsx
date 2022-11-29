import React from 'react'
import Songbar from './Songbar'
import './RelatedSongs.css'

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
          <Songbar
            key={`${song.key}-${artistId}-${i}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            artistId={artistId}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs
