import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import {
  MusicPlayer,
  MyPlaylist,
  Searchbar,
  Sidebar,
  TopPlay,
} from './components/index'
import {
  TopCharts,
  Search,
  Discover,
  ArtistDetails,
  TopArtists,
  SongDetails,
} from './pages'
import AppStyle from './App.module.css'

const App = () => {
  const activeSong = useSelector((state) => state.player.activeSong)

  return (
    <div className={AppStyle.OuterSpace}>
      <div className={AppStyle.home}>
        <Sidebar />
        <div className={AppStyle.routerDiv}>
          <div className={AppStyle.routes}>
            <Searchbar className={AppStyle.searchHome} />
            <Routes>
              <Route path="/" element={<TopPlay />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/my-playlist" element={<MyPlaylist />} />
            </Routes>
          </div>
        </div>
      </div>
      {activeSong.title && (
        <footer className={AppStyle.musicPlayer_App}>
          <MusicPlayer />
        </footer>
      )}
    </div>
  )
}

export default App
