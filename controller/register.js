const catchAsync = require("../middleware/catchAsync");
const User = require("../models/userschemas");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
const bcrypt = require("bcrypt");

exports.recipeRegister = catchAsync(async (req, res, next) => {
  const users = await User.findOne({ email: req.body.email });
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashPassword = await bcrypt.hash(req.body.password, salt);


  if (users) {
    return next(new ErrorHandler("User with given email already Exist!", 409));
  }
  const usercreate = User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  // const token = (await usercreate).username
  const token = (await usercreate).getJwtToken();
  sendToken(usercreate, 200, res, token);
});

exports.recipeLogin = catchAsync(async (req, res, next) => {
  const {email,password} = req.body;
  if(!email || !password){
    return next(new ErrorHandler("please fill all details",400))
  }

  const users = await User.findOne({email})
  if(!users){
    return next(new ErrorHandler("incorrect email or password",401))
  }

  const isPasswordMatched = await bcrypt.compare(password, users.password);;
  console.log("Match: ",isPasswordMatched)

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 403));
  }
});
