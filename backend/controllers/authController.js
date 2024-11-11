const createToken = require("../utils/createToken")
const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const validator = require("validator")



const registerUser =async(req, res)=>{
    try{
        const {name, email, passwordHash, role} = req.body;
        let user = await userModel.findOne({email});

        if(user) return res.status(400).json("user with the given email already exists");
        if(!email || !passwordHash || !role || !name) return res.status(400).json("All fields are required");
        if (!validator.isEmail(email)) return res.status(400).json("Email must be valid");
        if (!validator.isStrongPassword(passwordHash)) return res.status(400).json("Password must be strong ");

        user = new userModel({email, passwordHash, role, name});

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(user.passwordHash, salt);

        await user.save();

        const token = createToken(user._id);
        res.status(200).json({_id: user._id, email, token});
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};
const loginUser= async(req, res)=>{
    const {name, email, passwordHash} = req.body
    try{
        let user = await userModel.findOne({email});

        if(!user) return res.status(400).json("Invalid email or password");

        const isValidPassword = await bcrypt.compare(passwordHash, user.password);

        if(!isValidPassword) return res.status(400).json("Invalid email or password");

        const token = createToken(user._id);
        res.status(200).json({_id: user._id, name: user.name, email, token});

    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};
const logoutUser = async(req, res)=>{
    try{
        // Clear the token or session information
        req.session = null;
        res.status(200).json("User logged out successfully")
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};

module.exports = {registerUser, loginUser, logoutUser}