import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../reducers/features/playerFilter'
import { useGetTopChartsQuery } from '../reducers/services/shazamservice'
import './Topplay.css'

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="tcContainer">
    <div className="tcElement">
      <img className="tcImage" src={song?.images?.coverart} alt={song?.title} />
      <div className="tcCard">
        <Link to={`/songs/${song.key}`}>
          <p className="tcSongLink">{song.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="tcArtistLink">{song?.subtitle}</p>
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
  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  const topPlays = data?.slice(0, 5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true))
  }

  return (
    <div ref={divRef} className="homeTopPlay">
      <div className="topChartsContainer">
        <div className="topChartsItem">
          <h2 className="topChartsHead">Top Charts</h2>
          <Link to="/top-charts">
            <p className="topChartsLink">See more</p>
          </Link>
        </div>

        <div className="topPlays">
          {topPlays?.map((song, i) => (
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

      <div className="topArtistContainer">
        <div className="topArtists">
          <h2 className="topArtistsHead">Top Artists</h2>
          <Link to="/top-artists">
            <p className="topArtistsLink">See more</p>
          </Link>
        </div>

        <div className="topArtistsPeople">
          {topPlays?.slice(0, 5).map((artist) => (
            <div key={artist?.key} className="artistGroup">
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img
                  src={artist?.images?.background}
                  alt="Name"
                  className="artistImg"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopPlay
