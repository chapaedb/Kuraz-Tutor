const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const validator = require("validator")
const registerUser =async(req, res)=>{
    try{
        const {email, passwordHash} = req.body;
        let user = await userModel.findOne({email});

        if(user) return res.status(400).json("user with the given email already exists");
        if(!email || !passwordHash) return res.status(400).json("All fields are required");
        if (!validator.isEmail(email)) return res.status(400).json("Email must be valid");
        if (!validator.isStrongPassword(passwordHash)) return res.status(400).json("Password must be strong ");

        user = new userModel({email, passwordHash});

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(user.passwordHash, salt);

        await user.save();

        const token = createToken(user._id);
            res.status(200).json({_id: user._id, email, token});
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }


const loginUser = async (req, res)=>{
    try{
        const {email, passwordHash} = req.body;
        let user = await userModel.findOne({email});
        if(!user) return res.status(400).json("User not found");
        const isMatch = await bcrypt.compare(passwordHash, user.passwordHash);
        if(!isMatch) return res.status(400).json("Invalid credentials");
        const token = createToken(user._id);
        res.status(200).json({_id: user._id, email, token});
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const logoutUser = (req, res)=>{
    try{
        res.clearCookie("token");
        res.status(200).json("Logged out successfully")
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = {registerUser,loginUser, logoutUser}