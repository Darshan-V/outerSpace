import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { MusicPlayer } from './components/index'
import TopCharts from './actions/topCharts'
import './App.css'

const App = () => {
  const { activeSong } = useSelector((state) => state.player)

  return (
    <div className="OuterSpace">
      <div className="routes">
        <Routes>
          <Route path="/" element={<TopCharts />} />
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
