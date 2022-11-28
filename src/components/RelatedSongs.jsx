import React from 'react'
import Songbar from './Songbar'

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
      <h1 className="relatedSongsHead">RelatedSongs:</h1>
      <div className="relatedSongbar">
        {data.map((song, i) => (
          <Songbar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseClick}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedSongs
