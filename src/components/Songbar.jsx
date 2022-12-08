import React from 'react'
import PlayPause from './PlayPause'
import { Link } from 'react-router-dom'
import SongBarStyle from './Songbar.module.css'

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
    <div className={SongBarStyle.songBarContainer}>
      <div className={SongBarStyle.songs}>
        <img
          className={SongBarStyle.songBarImage}
          src={
            artistId
              ? song?.attributes?.artwork?.url
                  .replace('{w}', '125')
                  .replace('{h}', '125')
              : song?.images?.coverart
          }
          alt={song.title}
        />
        <div className={SongBarStyle.ArtistLink}>
          {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className={SongBarStyle.songname}>{song.title}</p>
            </Link>
          ) : (
            <p className={SongBarStyle.songname}>{song.attributes.name}</p>
          )}
          <p className={SongBarStyle.songMeta}>
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
