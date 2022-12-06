import React, { useState } from 'react'
import { writeLikedSongs } from './custom'

const Element = ({ song, index }) => {
  const [likedSong, setLikedSong] = useState({})

  function handleLike() {
    setLikedSong(song, index)
  }

  return (
    <div style={{ background: 'white' }}>
      <div>
        <div
          i={index}
          onClick={() => {
            handleLike()
            writeLikedSongs({
              key: likedSong.key,
              url: likedSong.url,
              sub: likedSong.subtitle,
              title: likedSong.title,
              images: likedSong.images,
            })
          }}
        >
          Like
        </div>
      </div>
    </div>
  )
}

export default Element
