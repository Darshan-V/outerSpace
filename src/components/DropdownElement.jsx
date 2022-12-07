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
              song: likedSong,
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
