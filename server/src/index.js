import express from 'express'
import cors from 'cors'
import connectToDb from './connection.js'
import { addSong, getLikedSongs } from './db.js'

connectToDb()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
  try {
    let song = req.body
    const likedSong = await addSong(song)
    res.json(likedSong)
  } catch (error) {
    res.json(error)
  }
})

app.get('/', async (req, res) => {
  try {
    const fetchedLikedSongs = await getLikedSongs()
    res.json(fetchedLikedSongs)
  } catch (error) {
    res.json(error)
  }
})

app.listen(5000, () => {
  console.log('listening at port 5000')
})
