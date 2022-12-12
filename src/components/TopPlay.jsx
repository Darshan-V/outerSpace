import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../reducers/features/playerFilter'
import { useGetTopChartsQuery } from '../reducers/services/shazamservice'
import TopPlayStyle from './Topplay.module.css'

const TopChartCard = ({
  song,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className={TopPlayStyle.tcContainer}>
    <div className={TopPlayStyle.tcElement}>
      <img
        className={TopPlayStyle.tcImage}
        src={song?.images?.coverart}
        alt={song?.title}
      />
      <div className={TopPlayStyle.tcCard}>
        <Link to={`/songs/${song.key}`}>
          <p className={TopPlayStyle.tcSongLink}>{song.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className={TopPlayStyle.tcArtistLink}>{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data } = useGetTopChartsQuery()
  const currentSongs = data?.tracks?.hits
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  const topPlays = data?.slice(0, 20)

  const handlePauseClick = (song, i) => {
    dispatch(setActiveSong({ song, data, currentSongs, i }))
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, currentSongs, i }))
    dispatch(playPause(true))
  }
  return (
    <div ref={divRef} className={TopPlayStyle.homeTopPlay}>
      <div className={TopPlayStyle.topChartsContainer}>
        <div className={TopPlayStyle.topChartsItem}>
          <h2 className={TopPlayStyle.topChartsHead}>Top Charts</h2>
          <Link to="/top-charts">
            <p className={TopPlayStyle.topChartsLink}>See more</p>
          </Link>
        </div>

        <div className={TopPlayStyle.topPlays}>
          {topPlays?.slice(0, 5)?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className={TopPlayStyle.topArtistContainer}>
        <div className={TopPlayStyle.topArtists}>
          <div className={TopPlayStyle.topArtistsHeading}>
            <h2 className={TopPlayStyle.topArtistsHead}>Top Artists</h2>
            <Link to="/top-artists">
              <p className={TopPlayStyle.topArtistsLink}>See more</p>
            </Link>
          </div>
          <div className={TopPlayStyle.topArtistsPeople}>
            {topPlays?.slice(0, 8).map((artist) => (
              <div key={artist?.key} className={TopPlayStyle.artistGroup}>
                <Link to={`/artists/${artist?.artists[0].adamid}`}>
                  <img
                    src={artist?.images?.background}
                    alt="Name"
                    className={TopPlayStyle.artistImg}
                  />
                </Link>
                <Link to={`/artists/${artist?.artists[0].adamid}`}>
                  <p>{artist?.subtitle}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPlay
