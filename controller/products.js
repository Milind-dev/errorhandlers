const ErrorHandler  = require('../utils/errorHandler');
const catchAsync =  require("../middleware/catchAsync")

exports.dashboard =  (req,res) => {
    res.send("dashboard")
}

exports.homepage = catchAsync(
    async (req,res,next) => {
            return next(new ErrorHandler("User not found",404)); //error handler
        }
    )
