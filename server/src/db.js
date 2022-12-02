import mongoose from 'mongoose'
const songListSchema = new mongoose.Schema({
  data: String,
})

const model = mongoose.model('likedSongs', songListSchema)

export function addSong(song) {
  return model.create(song)
}
