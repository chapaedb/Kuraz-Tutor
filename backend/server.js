const express = require("express")
const mongoose = require("mongoose")

const app = express()
require("dotenv").config()

const port = 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res)=>{
    console.log(`server is running on port ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDB connection established")).catch((error)=>console.log("MongoDB connection failed", error.message))