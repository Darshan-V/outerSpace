import React from 'react'
import { getLikedSongs } from './custom'

const MyPlaylist = () => {
  async function extractSongs() {
    let songs = await getLikedSongs()
    return songs
  }
  let mySongs = extractSongs()
  console.log('🚀 ~ file: MyPlaylist.jsx:10 ~ MyPlaylist ~ mySongs', mySongs)
  return <div></div>
}

export default MyPlaylist
