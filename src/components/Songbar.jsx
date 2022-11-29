import React from 'react'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'
import './Songbar.css'

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
    <div className="songBarContainer">
      <div className="songs">
        <img
          className="songBarImage"
          src={
            artistId
              ? song.attributes.artwork.url
                  .replace('{w}', '125')
                  .replace('{h}', '125')
              : song.images.coverart
          }
          alt={song.title}
        />
        <div className="ArtistLink">
          {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className="songname">{song.title}</p>
            </Link>
          ) : (
            <p className="songname">{song.attributes.name}</p>
          )}
          <p className="text-base text-gray-300 mt-1">
            {artistId ? song.attributes.albumName : song.subtitle}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={() => handlePauseClick(song, i)}
          handlePlay={() => handlePlayClick(song, i)}
        />
      ) : null}
    </div>
  )
}

export default Songbar
