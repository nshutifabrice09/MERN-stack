import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGO_URL)
        .then(()=>{
            console.log("Database connected successfully.");
            app.listen(PORT, ()=>{
                console.log('Server is running on port :${PORT}');
            })
        })
        .catch((error)=> console.log(error));

        app.use("/api", route);