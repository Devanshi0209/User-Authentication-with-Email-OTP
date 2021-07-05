import React,{useState,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Header} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/AuthContext';


const viewpage=()=>{
	const {signout}=useContext(authcontext);


return (
	<View>
	<Spacer>
	<Header
	 centerComponent={{ text: 'USER AUTHENTICATION APP', style: { color: '#fff', fontSize: 17 } }}
	  />
	  </Spacer>
	<Text>Welcome! Sucessfull Login</Text>

	
	<Spacer>
	<Button 
	title="SIGN OUT"
	onPress={()=>signout()} 
	/>
	</Spacer>

	</View>

	);

};

const styles=StyleSheet.create({

});
export default viewpage;

