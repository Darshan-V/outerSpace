import React, { useEffect, useState } from 'react'
import { getLikedSongs } from './custom'

const MyPlaylist = () => {
  const [likedSong, setLikedSong] = useState({})

  const extractSongs = async () => {
    let mySongs = await getLikedSongs()
    setLikedSong(mySongs)
    return mySongs
  }

  useEffect(() => {
    extractSongs()
  })

  return <div></div>
}

export default MyPlaylist
