import express from 'express'
import cors from 'cors'
import connectToDb from './connection.js'
import { addSong } from './db.js'

connectToDb()

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
  try {
    let song = req.body
    // console.log('🚀 ~ file: index.js:16 ~ app.post ~ song', song)
    const likedSong = await addSong(song)
    console.log('🚀 ~ file: index.js:18 ~ app.post ~ likedSong', likedSong)
    res.json(likedSong)
  } catch (error) {
    res.json(error)
  }
})

app.listen(5000, () => {
  console.log('listening at port 5000')
})
