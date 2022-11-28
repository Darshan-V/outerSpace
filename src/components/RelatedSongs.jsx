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
  console.log(data)

  return (
    <div className="relatedSongsContainer">
      <h1 className="relatedSongsHead">RelatedSongs:</h1>
      <div className="relatedSongbar">
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

export default RelatedSongs
