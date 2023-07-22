const userModel = require("../model/userSchema")
const emailValidator = require("email-validator")
const bcrypt = require('bcrypt')

const signup = async (req,res) => {
    const {name, email, password, confirmPassword} = req.body
    console.log(name, email, password, confirmPassword)

    try {

        if(!name){
            return res.status(400).json({
              success: false,
              message: `User name is requried`,
            });
        }
        if(!email){
            return res.status(400).json({
              success: false,
              message: `Email is requried`,
            });
        }
        if(!password){
            return res.status(400).json({
              success: false,
              message: `password is requried`,
            });
        }
        if(!confirmPassword){
            return res.status(400).json({
              success: false,
              message: `Confirm password is requried`,
            });
        }

        var validEmail = emailValidator.validate(email)
        if(!validEmail){
            return res.status(400).json({
                success : false,
                message : "Please provide a valid email"
            })
        }
        if(password !== confirmPassword){
            return res.status(400).json({
                success : false,
                message : "Password and confirm password doesn't match"
            })
        }
        
        const userInfo = userModel(req.body)
        const result = await userInfo.save()

        return res.status(200).json({
            success : true,
            data : result
        })
    } catch (error) {
        if(error.code === 1100){
            return res.status(400).json({
                success : false,
                message: "Account already exists"
            })
        }
        return res.status(400).json({
          success: false,
          message: error.message,
        });
    }
}

const signin = async (req,res) => {
    const { email, password} = req.body
    
    if(!email || !password){
        let mess;
        if(!email) mess = `email is required`
        else mess = `password is required`
        return res.status(400).json({
            success : false,
            message : mess
        })
    }
    try {
        const user = await userModel
                        .findOne({
                            email
                        })
                        .select('+password')
        const comparePass = await bcrypt.compare(password, user.password)
        if(!user || !comparePass ){
            return res.status(400).json({
                success : false,
                message : "Invalid credentials"
            }) 
        }

        const token = user.jwtToken()
        user.password = undefined

        const cookieOptions = {
            maxAge : 24 * 60 * 60 * 1000,
            httpOnly : true
        }

        res.cookie("token", token, cookieOptions)
        res.status(200).json({
            success: true,
            data: user
        })

    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
}

const getUser = async (req,res) => {
    const userId = req.user.id;
    try {
        const user = await userModel.findById(userId)
        return res.status(200).json({
            success : true,
            data : user
        })
    } catch (e) {
        return res.status(400).json({
            success : false,
            message : e.message
        })
    }
}

const logout = (req,res) => {
    try {
        const cookieOptions = {
            expires : new Date(),
            httpOnly : true
        }
        res.cookie("token", null, cookieOptions)
        res.status(200).json({
            success : true, 
            message : "Successfully Logged Out"
        })
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}


module.exports = {
    signup,
    signin,
    getUser,
    logout
}