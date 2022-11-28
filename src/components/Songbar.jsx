import React from 'react'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'

const Songbar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="SongbarforActiveSong">
      <div className="songImage">
        <img
          className="songImg"
          src={
            artistId
              ? song.attributes.artwork.url
                  .replace('{w}', '125')
                  .replace('{h}', '125')
              : song.images.coverart
          }
          alt={song.title}
        />
        <div className="Artist">
          {!artistId ? (
            <Link to={`songs/${song.key}`}>
              <p className="songTitle">{song.title}</p>
            </Link>
          ) : (
            <p className="SongAltTitle">{song.attributes.name}</p>
          )}
          <p className="songMeta">
            {artistId ? song.attributes.albumName : song.subtitle}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      ) : null}
    </div>
  )
}

export default Songbar
