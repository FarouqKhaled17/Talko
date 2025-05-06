import { config } from "dotenv"
import mongoose from "mongoose"
import colors from "colors"

export const dbConnection = () => {
    config()
    mongoose.connect(process.env.DB_URL)
        .then(() => console.log(`Connected to DB🚀`.cyan.bold))
        .catch((err) => console.log('Error connecting to DB 😭'.red.bold, err))
}