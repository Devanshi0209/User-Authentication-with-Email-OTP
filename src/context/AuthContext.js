import createdatacontext from './createdatacontext';
//this the reducer function with switch statement
import skillerAPI from '../api/skiller';
import { AsyncStorage } from 'react-native';
import React from 'react';
import {navigate} from '../navigationRef';
const authReducer=(state,action)=>{
	switch(action.type)
	{
		case 'adderr':
		return {...state, errormessage: action.payload};
		case 'signup':
		return {errormessage:'',token: action.payload}
		case 'signout':
		return {token: null, errorMessage:''}
		default:
		return state;
	}

};


//here we will write out the different functions to change our state and the children have access to this as well
const signup=(dispatch)=>{
return async ({email, password})=> {
	try 
	{
		console.log("here");
		console.log({email,password});
const response=await skillerAPI.post('/signup',{email,password});
console.log(response.data);
console.log("here2");

await AsyncStorage.setItem('email',JSON.stringify(`${email}`));

navigate('Otp');

	}
	catch(err)
	{
		dispatch({type:'adderr', payload: "Something went wrong with sign up"});
		console.log(err.message);

	}

};
};

const signin=(dispatch)=>{

return async ({email,password})=>{
	try
	{
	const response=await skillerAPI.post('/signin',{email,password});
	console.log(response.data);
console.log("here4");
await AsyncStorage.setItem('token',response.data.token);
dispatch({type:'signup',payload:response.data.token});
navigate('mainflow');
}

catch(err)
{
	dispatch({type:'adderr', payload: "Invalid credentials"});
}

};
};

const signout=(dispatch)=>{
return async ()=>{
	await AsyncStorage.removeItem('token');
dispatch({type:'signout'});
navigate('Home');

};
};

const verifyotp=(dispatch)=>{
return async ({sentotp,useremail})=>{
	try
	{
		console.log("here3");
	console.log({sentotp,useremail});
	const response=await skillerAPI.post('/verifyotp',{sentotp,useremail});
	console.log(response.data);
console.log("here4");
await AsyncStorage.setItem('token',response.data.token);
dispatch({type:'signup',payload:response.data.token});
navigate('mainflow');

}
catch(err)
{
	dispatch({type:'adderr', payload: "Invalid OTP"});
	console.log(err.message);
}
};
};

export const {Provider,Context}=createdatacontext(
authReducer, //the reducer functions
{signup, signin, signout,verifyotp}, //the actions to change the state
{token: null,errormessage:''} //defaultvalue of the state

	);


