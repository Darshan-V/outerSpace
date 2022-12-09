import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArtistCardStyle from './ArtistCard.module.css'

const ArtistCard = ({ track }) => {
  const navigate = useNavigate()
  return (
    <div
      className={ArtistCardStyle.artistCard}
      onClick={() => navigate(`/artists/${track.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={track?.images?.coverart}
        className={ArtistCardStyle.artistImage}
      />
      <p className={ArtistCardStyle.trackSub}>{track.subtitle}</p>
    </div>
  )
}

export default ArtistCard
