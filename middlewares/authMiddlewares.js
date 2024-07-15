const jwt = require("jsonwebtoken")


function verifyJwt(req, res, next){
  try {
    const jwtToken = req.headers.authorization || req.headers.Authorization 
    const user = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
    req.user = user
    next()
    return
  } catch (error) {
    console.log(error)
    return res.status(401).json({message:"Invalid token"})
  }
}
module.exports.verifyJwt = verifyJwt