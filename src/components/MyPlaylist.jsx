import React, { useEffect, useState } from 'react'
import { getLikedSongs } from './custom'
import SongCard from './SongCard'

import { useSelector } from 'react-redux'

const MyPlaylist = (handlePauseClick, handlePlayClick) => {
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
    <div className="myPlaylist">
      {likedSong?.map((song) => (
        <SongCard
          key={song?.data?.song?.key}
          song={song?.data?.song}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      ))}
    </div>
  )
}

export default MyPlaylist
