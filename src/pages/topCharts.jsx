import React from 'react'
import { useSelector } from 'react-redux'

import { Loader, SongCard } from '../components/index'
import { useGetTopChartsQuery } from '../reducers/services/shazamservice'
import TopChartsStyle from './topCharts.module.css'

const TopCharts = () => {
  const { data, isFetching } = useGetTopChartsQuery()

  const { activeSong, isPlaying } = useSelector((state) => state.player)

  if (isFetching) return <Loader title="Loading Top Charts" />
  return (
    <div className={TopChartsStyle.topCharts}>
      <h2 className={TopChartsStyle.topchartsLabel}>Discover Top Charts</h2>

      <div className={TopChartsStyle.topChartsSongsContainer}>
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
