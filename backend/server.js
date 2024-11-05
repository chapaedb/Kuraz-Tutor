const express = require("express")
const mongoose = require("mongoose")
const {registerRoute, loginRoute, logoutRoute} = require("./Routes")

const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

app.use("api/auth", registerRoute)
app.use("api/auth", loginRoute)
app.use("api/auth", logoutRoute)
   
const port = 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res)=>{
    console.log(`server is running on port ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDB connection established")).catch((error)=>console.log("MongoDB connection failed", error.message))