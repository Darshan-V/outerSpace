import React from 'react'
import NavBar from './Navbar'
import Player from './Player'
import SongList from './SongList'
import songs from '../data/songs.json'
import SongDetail from './SongDetail'
import SongListHeader from './SongListHeader'
import './css/App.css'

for (let index = 0; index < songs.length; index++) {
  const song = songs[index]
  song.id = index
}

const App = () => {
  return (
    <>
      <NavBar />
      <SongListHeader />
      <SongDetail />
      <SongList songs={songs} />
      <Player />
      <a href="#focused" id="focus-link" hidden>
        Go to playing element
      </a>
    </>
  )
}

export default App
