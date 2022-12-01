import React, { useState } from 'react'

const Element = ({ song, i }) => {
  const [likedSong, setLikedSong] = useState({})
  // console.log('🚀 ~ file: Element.jsx:5 ~ Element ~ likedSong', likedSong)
  const [saveCuston, setSaveCustom] = useState({})
  console.log('🚀 ~ file: Element.jsx:7 ~ Element ~ saveCuston', saveCuston)
  function handleLike() {
    setLikedSong(song, i)
  }
  function handleSaveCustom() {
    setSaveCustom(song, i)
  }
  return (
    <div style={{ background: 'white' }}>
      <ul style={{ listStyleType: 'none' }}>
        <li i={i} onClick={handleLike}>
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
