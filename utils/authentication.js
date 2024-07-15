const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const generateJwt = (user) => {
    const token = jwt.sign(
        {userId: user.id, email:user.email},
        process.env.JWT_SECRET_KEY,
        {expiresIn: "1h"}
    );
    return token;
}
module.exports.generateJwt = generateJwt


const hashPassword = async (password) => {
    const saltRounds = Number(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    return hashedPassword
}
module.exports.hashPassword = hashPassword


const validatePassword = async (incomingPassword, existingPassword) => {
    const checkPassowrd = await bcrypt.compare(incomingPassword, existingPassword)   
    return checkPassowrd
}
module.exports.validatePassword = validatePassword

