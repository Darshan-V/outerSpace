import React from 'react'
import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ track }) => {
  const navigate = useNavigate()
  return (
    <div
      className="artistCard"
      onClick={() => navigate(`/artists/${track.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track.images.coverart} className="artistImage" />
      <p className="trackSub">{track.subtitle}</p>
    </div>
  )
}

export default ArtistCard
