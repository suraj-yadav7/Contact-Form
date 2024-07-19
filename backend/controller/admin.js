
export const adminSignup = async(req, res)=>{
    console.log("signup hit")
    res.status(200).send({status:true, message:"User SignedUp Successfully"})
}

export const adminLogin= async(req, res)=>{
    console.log("login hit")
    res.status(200).send({status:true, message:"Login response dummy"})
}