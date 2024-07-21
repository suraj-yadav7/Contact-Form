import jwt from 'jsonwebtoken'
export const authorization=async(req, res, err)=>{
    try{
        let authToken = req.headers['authorization']
        if(authToken){
            let token = authToken.split(" ")[1]
            await jwt.verify(token, process.env.JWT_SECRET, (err, decode)=>{
                if(err){
                    res.status(402).json({status:false,message:"You are not authorizes"})
                }
                else{
                    let role=decode.user.role
                    if(role==='admin'){
                        next()
                    }
                    else{
                        res.status(401).json({status:false, message:"You are not Admin"})
                    }
                }
            })
        }
        else{
            res.status(403).json({status:false, message:"Need authorization token to perform task"})
        }
    }
    catch(err){
        console.log("Error occured at user authentication: ", err)
        res.status(500).json({status:false, message:"Internal server error"})
    }
}