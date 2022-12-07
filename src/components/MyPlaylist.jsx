import React, { useEffect, useState } from 'react'
import { getLikedSongs } from './custom'
import SongCard from './SongCard'

const MyPlaylist = (
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick
) => {
  const [likedSong, setLikedSong] = useState()

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
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  )
}

export default MyPlaylist
