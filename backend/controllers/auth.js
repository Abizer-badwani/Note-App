import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import user_model from '../models/user.js'

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username) { return res.json({ success: false, message: 'Enter a Name!' }) }
        if (!email) { return res.json({ success: false, message: 'Enter an Email!' }) }
        if (!password) { return res.json({ success: false, message: 'Enter Password!' }) }

        if (!validator.isEmail(email)) { return res.json({ success: false, message: 'Enter Valid Email!' }) }
        if (!validator.isStrongPassword(password)) { return res.json({ success: false, message: 'Enter Strong Password!' }) }

        const is_user_exists = await user_model.findOne({email})
        if (is_user_exists) { return res.json({ success: false, message: 'User Already Exists!' }) }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const new_user = await user_model.create({ username, email, password: hash })

        const token = jwt.sign({ id: new_user._id }, "IAMABIZER")

        return res.cookie('token', token, { httpOnly: true })
            .json({ success: true, message: 'User Registered Successfully!', user: new_user })

    }
    catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: "Server Error. Try Again!" })
    }
    
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email) { return res.json({ success: false, message: 'Enter an Email' }) }
        if (!password) { return res.json({ success: false, message: 'Enter Password!' }) }
        if (!validator.isEmail(email)) { return res.json({ success: false, message: 'Email Format Invalid!' }) }

        const user_exist = await user_model.findOne({ email })
        if (!user_exist) { return res.json({ success: false, message: "User Not found. Signup First!" }) }

        const match = bcrypt.compareSync(password, user_exist.password)

        if (!match) { return res.json({ success: false, message: "Enter Correct Password!" }) }

        const token = jwt.sign({ id: user_exist._id }, "IAMABIZER")

        return res.cookie('token', token, { httpOnly: true }).json({ success: true, message: "User Logged in Successfully!", user: user_exist })

    }
    catch (error) {
        console.log(error.message)
        return res.json({ succes: false, message: "Server Error. Try Again!" }) 
    }
}

const logoutUser = (req, res) => {
    try {
        return res.clearCookie('token').json({ success: true, message: 'Logout Successful!' })
    }
    catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: 'Server Error. Try Again!' })
    }
}

export { registerUser, loginUser, logoutUser }