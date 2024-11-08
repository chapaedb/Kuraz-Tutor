const express = require("express")
const mongoose = require("mongoose")
const {sessionRoute,Authroute, profileRoute, coursesRoute,messageRoute,paymentRoute, adminRoute} = require('./routes');
const app = express()
require("dotenv").config()
app.use(express.json())

app.use('/' , (req, res) => {
    res.send("Welcome to Kuraz Tutor")
});
app.use("api/v1/session", sessionRoute);
app.use("api/v1/auth", Authroute);
app.use("api/v1/profile", profileRoute);
app.use("api/v1/courses", coursesRoute);
app.use("api/v1/admin", adminRoute);
app.use("api/v1/message", messageRoute);
app.use("api/v1/payment", paymentRoute);


const port = 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res)=>{
    console.log(`server is running on port ${port}`)
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("MongoDB connection established")).catch((error)=>console.log("MongoDB connection failed", error.message))