// const User  = require('../models/userschemas')
const ErrorHandler  = require('../utils/errorHandler');
const catchAsync =  require("../middleware/catchAsync")

exports.dashboard =  catchAsync(
    async (req,res,next) => {
        const dash = true;
        if(!dash){
            return next(new ErrorHandler("dashboard error",204))
        }
        return res.json({message:"dashboard"})
      }
    );

exports.homepage = catchAsync(
    async (req,res,next) => {   
            return next(new ErrorHandler("User not found",404)); //error handler
        }
    );

exports.recipeApis = catchAsync(
    async (req,res,next) => {   
             const data = {
                name:"milind",
                age:32
            }
            const datas = await data;
            console.log(!datas)
            if(!datas){
                return next(new ErrorHandler("User not found",404)); //error handler
            }
           return res.status(200).json({data:data})
        }
    );


// exports.recipeRegister = catchAsync(
//     async (req,res,next) => {   
  
//        const users = await User.findOne({ email: req.body.email });
//        if (users) {
//          return next(new ErrorHandler( "User with given email already Exist!",409))
//        }

//        const recipeCreate  =  User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//           });

//           console.log(recipeCreate)
//           res.status(200).json({ message: "successfull register database ",recipeCreate  });
//         //  return res.status(200).json({data:user})
//         }
//     );
    