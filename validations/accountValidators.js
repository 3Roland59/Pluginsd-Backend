const Joi = require('joi')

module.exports.loginSchema = () => {
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.required()
    })
}


// loginSchema.
module.exports.signUpSchema = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().regex(passwordRegex).min(8).required()
    })
}
