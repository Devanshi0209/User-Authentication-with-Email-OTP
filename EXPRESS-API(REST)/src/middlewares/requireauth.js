const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const user=mongoose.model('user');

module.exports=(req,res,next)=>{
	const {authorization}=req.headers;
	if(!authorization)
	{
		return res.status(401).send("You must be logged in");
	}
	const token=authorization.replace('Bearer ','');
	jwt.verify(token,'MY_SECRET_KEY',async (err,payload)=>{
if(err)
{
	return res.status(401).send("You must be logged in");

	}
	const {userId}=payload;
	const user2=await user.findById(userId);
	req.user=user2;
	next();

});


};