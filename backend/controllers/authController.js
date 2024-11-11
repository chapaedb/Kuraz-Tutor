const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const validator = require("validator")
const createToken = require("../utils/createToken")


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
        res.status(200).json({_id: user._id, email, role, name, token});
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};

const loginUser = (req, res)=>{

}

const logoutUser = (req, res)=>{

}

module.exports = {registerUser,loginUser, logoutUser}