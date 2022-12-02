import mongoose from 'mongoose'

export default function connectToDb() {
  const uri = `mongodb://127.0.0.1:27017/musicApp`
  mongoose.connect(uri, () => {
    console.log('connected to mongo server')
  })
}
