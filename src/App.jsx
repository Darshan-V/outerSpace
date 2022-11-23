import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { MusicPlayer, Searchbar } from './components/index'
import { TopCharts, Search } from './pages'
import './App.css'

const App = () => {
  const { activeSong } = useSelector((state) => state.player)

  return (
    <div className="OuterSpace">
      <div className="routes">
        <Searchbar />
        <Routes>
          <Route path="/" element={<TopCharts />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </div>

      {activeSong?.title && (
        <footer className="musicPlayer_App">
          <MusicPlayer />
        </footer>
      )}
    </div>
  )
}

export default App
