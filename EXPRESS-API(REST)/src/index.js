
require('./models/group');
require('./models/skill');
require('./models/user');
const express=require('express');
const mongoose=require('mongoose');
const authrouter1=require('./routers/authrouter');

const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const path=require('path');
const exphbs=require('express-handlebars');
const requireauth=require('./middlewares/requireauth');

const mongouri='mongodb+srv://admin:passwordpassword@cluster0.3pox0.mongodb.net/<dbname>?retryWrites=true&w=majority';

const app=express();
app.use(bodyparser.json());
app.use(authrouter1);


mongoose.connect(mongouri,{

	useNewUrlParser: true,
	useCreateIndex:true
});
mongoose.connection.on('connected',()=>{
	console.log("Connected to mongo instnace");
});
mongoose.connection.on('error', err=>{
	console.log("error1");
});



app.get('/',requireauth,(req,res)=>{

res.send(`your email is ${req.user.email}`);
});

app.listen(3000,()=>{
console.log('Listening on port 3000');
});
