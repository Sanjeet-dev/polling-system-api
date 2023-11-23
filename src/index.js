import dotenv from 'dotenv';
import express from "express";
import connectDB from './db/database.js';

dotenv.config({
	path: './env'
})

connectDB();
const app=express();

app.get("/",(req,res)=>{
	res.send("hello there");
})

app.listen(process.env.PORT,()=>console.log("server is running on port 5555"));
