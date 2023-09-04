import user_model from '../models/user.js'

const getUser = async (req, res) => {
    try {
        const { id } = req.user
        
        const user = await user_model.findOne({_id: id}).select('-_id email')
        
        if (!user) { return res.json({ success: false, message: 'User Not Found!' }) }
        
        return res.json({ success: true, message: 'User Profile Fetched!', user })
    }
    catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: 'Server Error. Try Again!' })
    }
}

export { getUser }