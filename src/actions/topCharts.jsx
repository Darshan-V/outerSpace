import React from 'react'
import { useSelector } from 'react-redux'

import { Loader, SongCard } from '../components/index'
import { useGetTopChartsQuery } from '../reducers/services/shazamservice'

const TopCharts = () => {
  const { data, isFetching } = useGetTopChartsQuery()
  console.log(useGetTopChartsQuery())
  const { activeSong, isPlaying } = useSelector((state) => state.player)

  if (isFetching) return <Loader title="Loading Top Charts" />
  return (
    <div className="topCharts">
      <h2 className="topchartsLabel">Discover Top Charts</h2>

      <div className="songsContainer">
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default TopCharts
