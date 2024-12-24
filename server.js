// const express = require("express");
import express from 'express'
const app = express();
import connectDB from './dbConnection.js'
import Ticket from './schema.js';
import cors from 'cors'
import router from './routes.js';

app.use(cors());
//Middleware for parsing Json
app.use(express.json());
//Connecting to Database
connectDB(); 
app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.
app.use("/api", router);

app.listen(8080,()=>{
    console.log("App listening to port 8080")
});