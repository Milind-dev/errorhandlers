const erromiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || "internal server errror";
  err.message = err.message || 500;
  console.log(err);
  if (err.statusCode == 404) {
    return res.status(404).json({ message: "Not Found 404" });
  }
  if (err.statusCode == 204) {
    return res.status(204).json({ message: "Content Not Found" });
  }

  if (err.statusCode == 409) {
    return res
      .status(409)
      .json({ message: "Users with given email already Exist!" });
  }

  if (err.statusCode == 403) {
    return res
      .status(401)
      .json({ message: "Users with given email and password incorrect!" });
  }

//   if (err.code === 11000) {
//     const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
//     err = new ErrorHandler(message, 400);
//   }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again `;
    err = new ErrorHandler(message, 400);
  }

  // JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: true,
    message: err.message,
  });
  // res.status(200).json({message:"success"})
};
module.exports = erromiddleware;
