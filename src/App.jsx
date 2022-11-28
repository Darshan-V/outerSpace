import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { MusicPlayer, Searchbar, Sidebar } from './components/index'
import { TopCharts, Search, Discover, ArtistDetails, TopArtists } from './pages'
import './App.css'

const App = () => {
  const { activeSong } = useSelector((state) => state.player)

  return (
    <div className="OuterSpace">
      <div className="home">
        <Sidebar />
        <div className="routerDiv">
          <div className="routes">
            <Searchbar className="searchHome" />
            <div>
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      {activeSong.title && (
        <footer className="musicPlayer_App">
          <MusicPlayer />
        </footer>
      )}
    </div>
  )
}

export default App
