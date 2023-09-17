
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");


const userRegisterSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        // maxLength:10,
        // minLength:4
    },
    email:{
        type:String,
        required:true,
        // maxLength:10,
        // minLength:6
    },
    password:{
        type:String,
        required:true,
        // maxLength:10,
        // minLength:4
    }
})

userRegisterSchema.methods.getJwtToken = () => {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: "12d"
    });
}

  

const User = mongoose.model("userRegisterSchema", userRegisterSchema);


module.exports = User