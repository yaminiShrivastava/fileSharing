import express from "express";
import router from "./Routes/route.js";
import cors from 'cors';
import dbConnection from "./Database/app.js";

const port=8000;
const app=express();

app.use(cors());
app.use('/',router);


dbConnection();
app.listen(port,()=>{
    console.log(`running on port ${port}`)
})