import { app } from './server.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables
const port = process.env.PORT // in the file .env, the environment variable PORT is set to 3000

try {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
  })
} catch (error) {
  console.error(error)
}
