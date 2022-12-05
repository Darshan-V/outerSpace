import mongoose from 'mongoose'

const songListSchema = new mongoose.Schema({
  data: String,
})

const model = mongoose.model('playlists', songListSchema)

export function addSong(song) {
  let likedSong = JSON.stringify(song)
  const a = new model({ data: likedSong })
  a.save()
  return a
}

export async function getLikedSongs() {
  const likedSongs = await model.find({}, { data: 1 })
  return likedSongs
}
