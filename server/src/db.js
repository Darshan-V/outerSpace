import mongoose from 'mongoose'

const songListSchema = new mongoose.Schema({
  data: Object,
})

const model = mongoose.model('playlists', songListSchema)

export function addSong(song) {
  // let likedSong = JSON.stringify(song)
  const a = new model({ data: song })
  a.save()
  return a
}

export async function getLikedSongs() {
  const likedSongs = await model.find({})
  return likedSongs
}
