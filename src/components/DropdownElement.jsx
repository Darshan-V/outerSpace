import React, { useState } from 'react'
import { writeLikedSongs } from './custom'

const Element = ({ song, i }) => {
  console.log(
    '🚀 ~ file: DropdownElement.jsx:5 ~ Element ~ song',
    song.artists.adamid
  )
  const [likedSong, setLikedSong] = useState({})

  const [saveCustom, setSaveCustom] = useState({})
  function handleLike() {
    setLikedSong(song, i)
  }
  function handleSaveCustom() {
    setSaveCustom(song, i)
  }
  return (
    <div style={{ background: 'white' }}>
      <div>
        <div
          onClick={() => {
            handleLike()
            writeLikedSongs(likedSong)
          }}
        >
          Like
        </div>
      </div>
    </div>
  )
}

export default Element
