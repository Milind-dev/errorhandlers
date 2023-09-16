const catchAsync =  (controller) => async(req,res,next) => {
    try{
        await controller(req,res,next)
    }
    catch(error) {
        return next(error)
    }
    // Promise.resolve(controller(req, res, next)).catch(next);
}


module.exports = catchAsync