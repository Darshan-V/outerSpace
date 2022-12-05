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

export { writeLikedSongs }
