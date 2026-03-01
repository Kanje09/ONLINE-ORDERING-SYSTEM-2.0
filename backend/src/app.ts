import express from "express";
import cors from "cors";
import { timeStamp } from "node:console";

const app = express();

app.use(cors());

app.use(express());

app.get("/", (req, res) => {
    res.send("Backend is running.");
});

app.get("/health", (req, res) => {
   res.status(200).json({
        status: "ok",
        message: "Server is running.",
        timeStamp: new Date().toISOString()
   }); 
});


export default app