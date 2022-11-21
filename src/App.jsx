import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { MusicPlayer } from './index.js'
import { TopCharts } from './actions/index'

const App = () => {
  const { activeSong } = useSelector((state) => state.player)

  return (
    <div className="relative flex">
      <div className="flex-1 h-fit pb-40">
        <Routes>
          <Route path="/top-charts" element={<TopCharts />} />
        </Routes>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default App
