const erromiddleware = (err,req,res,next) => {
    err.statusCode = err.statusCode || "internal server errror"
    err.message = err.message || 500; 

    if(err.statusCode == 404){
        return res.status(404).json({message:"Not Found 404"})
    }
    res.status(200).json({message:"success"})

}
module.exports = erromiddleware;