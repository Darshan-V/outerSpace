import React, { useState } from 'react'
import { writeLikedSongs } from './custom'

const Element = ({ song, i }) => {
  const [likedSong, setLikedSong] = useState({})
  // console.log('🚀 ~ file: Element.jsx:5 ~ Element ~ likedSong', likedSong)
  const [saveCustom, setSaveCustom] = useState({})
  // console.log('🚀 ~ file: Element.jsx:7 ~ Element ~ saveCuston', saveCustom)
  function handleLike() {
    setLikedSong(song, i)
  }
  function handleSaveCustom() {
    setSaveCustom(song, i)
  }
  return (
    <div style={{ background: 'white' }}>
      <ul style={{ listStyleType: 'none' }}>
        <li
          i={i}
          onClick={() => {
            handleLike()
            writeLikedSongs(likedSong)
          }}
        >
          Like
        </li>
        <li i={i} onClick={handleSaveCustom}>
          Save
        </li>
      </ul>
    </div>
  )
}

export default Element
