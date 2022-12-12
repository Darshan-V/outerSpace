import mongoose from 'mongoose'

const songListSchema = new mongoose.Schema({
  data: Object,
  uid: String,
})

const model = mongoose.model('playlists', songListSchema)

export function addSong(song, likedKey) {
  // let likedSong = JSON.stringify(song)
  const a = new model({ data: song, uid: likedKey })
  a.save()
  return a
}

export async function getLikedSongs() {
  const likedSongs = await model.aggregate([
    {
      $match: {
        data: { $exists: true },
      },
    },
  ])
  return likedSongs
}
