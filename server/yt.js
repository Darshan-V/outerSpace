import youtubeMusic from 'youtube-music-api'

const api = new youtubeMusic()
let songs = []

async function searchSong() {
  await api.initalize()
  //   await api.search('nights', 'song').then((result) => {
  //     songs.push(result)
  //   })
  await api
    .getPlaylist('VLPLTw3BBwcLBjG-4fernx2Xt-GHdYMPYAFM')
    .then((result) => {
      songs.push(result)
    })

  return songs
}

const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'da3c9b5f4cmsh7ed7146e7206095p1f0e66jsn126f03eeb0c7',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
}

export async function getCharts() {
  return (
    fetch(url, options)
      .then((res) => res.json())
      // .then((json) => console.log(json))
      .catch((err) => console.error('error:' + err))
  )
}
export { searchSong }
