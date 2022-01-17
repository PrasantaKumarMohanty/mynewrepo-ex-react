import express from "express";
import {connectDB} from "./db/connectdb.js";
import web from "./routes/web.js";
import cors from 'cors';



const app = express()
app.use(cors())
const port = process.env.PORT || '4000'
// prasant('smart and handsome')


const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//Database connection
connectDB(DATABASE_URL);

//JSON
app.use(express.json())

//Load Routes
app.use("/user", web)


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})