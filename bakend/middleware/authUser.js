import jwt from 'jsonwebtoken';

// admin authentication middleware

const authUser = (req, res, next) => {
    try{
        const {token} = req.headers;
        if(!token){
            return res.json({success: false, message:"Not Authorized login again"});
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = token_decode.id
        next()
    }
    catch(err){
        console.log(err);
        res.json({success:false, message:err.message});
    }
}

export default authUser;