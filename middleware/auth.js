const catchAsyncErrors = require('../middleware/catchAsync')
const jwt = require("jsonwebtoken");
const User = require('../models/userschemas');
const ErrorHandler = require('../utils/errorHandler');

exports.isAuthenticate =  catchAsyncErrors(
    async (req,res,next) => {
        const {token} = req.cookies;
        if(!token){
            return next(new ErrorHandler("Please Login to access this resource", 401));
        }
        var decodedId = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await User.findById(decodedId.id)
        console.log("req.user = ", req.user)
        next()
})

