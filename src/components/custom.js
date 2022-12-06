async function writeLikedSongs(song) {
  let likedSongs = await fetch('http://localhost:5000', {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'content-type': 'application/json',
    },
  })

  return likedSongs
}

async function getLikedSongs() {
  let savedSongs = await (
    await fetch('http://localhost:5000', {
      method: 'GET',
    })
  ).json()

  return savedSongs
}

// export const savedSongs = await getLikedSongs()

export { writeLikedSongs, getLikedSongs }
