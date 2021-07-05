const express=require('express');
const mongoose=require('mongoose');
const user=mongoose.model('user');
const nodemailer=require('nodemailer');
const jwt=require('jsonwebtoken');


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: 'appbydevanshi@gmail.com',
      pass: 'appbydevanshi1234',
    }
    
});


var otp = Math.random();
otp = otp * 1000000;
otp = parseInt(otp);

console.log(otp);



const router=express.Router();

router.post('/signup',async (req,res)=>{
	// obtaining the json info sent by our user on mobile device which is email and password
	const {email,password}=req.body;
	console.log("in backend");

	//checking if that email account already exists
	//if yes then generate error else generate otp

try{

const user1=new user({email,password});
await user1.save();
}
catch (err)
{
	return res.status(422).send(err.message);
}

//in try catch send mail to user
     // send mail with defined transport object
    var mailOptions={
        to: req.body.email,
       subject: "Registration OTP ",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
        	console.log("mail not sent");
            return console.log(error);

        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('otp');
    });





res.send({otp});

});


//now what has happend is if the user sent an email id and password and that email id 
//isnt already associated with an existing user we create the account and send an otp to the email adddress
//now the user needs to enter the correct otp, if wrong otp is entered delete the account an raise error
//if correct otp is entered generate and return the jwt


router.post('/verifyotp', async (req,res) => {
	const {sentotp,useremail}=req.body;
	if (otp.toString()==sentotp.toString())
	{
		const free=await user.find({email: useremail});
		const token=jwt.sign({userId:free[0]._id},'MY_SECRET_KEY');
		res.send({token});

		//res.send("Correct otp was sent");

	}
	else
	{
		//delete the account
		try{
		const free=await user.find({email: useremail});

		const freeze= await user.findByIdAndDelete(free[0]._id);
		return res.status(422).send("Incorrect OTP was entered");
	}
	catch (err)
{
	return res.status(422).send(err.message);
}


	}
});



router.post('/signin', async (req,res)=>{
const {email,password}=req.body;
if(!email || !password)
{
	return res.status(401).send('empty credentials');
}
try
{
	const free=await user.findOne({email});
	//console.log(free);
	//console.log(free._id);
	if (free.password.toString()==password.toString())
	{
		const token =jwt.sign({userId: free._id},'MY_SECRET_KEY');
		res.send({token});

	}
	else
	{
		return res.status(401).send('wrong password');

	}
}
catch(err)
{
	return res.status(422).send("This account doesnt exist.");
}

});



module.exports = router;