import React, { useEffect, useState } from 'react'
import { getLikedSongs } from './custom'
import SongCard from './SongCard'
import MyPlaylistStyles from './MyPlaylist.module.css'

import { useSelector } from 'react-redux'

const MyPlaylist = () => {
  const [likedSong, setLikedSong] = useState()

  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const extractSongs = async () => {
    let mySongs = await getLikedSongs()
    setLikedSong(mySongs)
    return mySongs
  }

  useEffect(() => {
    extractSongs()
  }, [])

  return (
    <div className={MyPlaylistStyles.myPlaylist}>
      <h2 className={MyPlaylistStyles.title}>Liked List</h2>
      <div className={MyPlaylistStyles.songs}>
        {likedSong?.map((song, i) => (
          <SongCard
            key={song?.data?.song?.key}
            song={song?.data?.song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            likedSong={likedSong}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default MyPlaylist
