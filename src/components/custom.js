async function writeLikedSongs(song) {
  return await fetch('http://localhost:5000/liked', {
    method: 'POST',
    body: JSON.stringify(song),
    headers: {
      'content-type': 'application/json',
    },
  })
}

export { writeLikedSongs }
