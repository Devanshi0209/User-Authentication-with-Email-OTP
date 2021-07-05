import React,{useState,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text, Input, Button,Header} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/AuthContext';



const otpsignuppage=props=>{
	const [email,setemail]=useState('');
	const [password,setpassword]=useState('');

const {state,signup}=useContext(authcontext);

return (
	<View style={styles.container}>
<Spacer>
	<Header
	 centerComponent={{ text: 'SIGN UP USING OTP!!!!', style: { color: '#fff', fontSize: 17 } }}
	  />
	  </Spacer>
<Spacer />
<Spacer>
<Input label="Email"
placeholder="Enter valid Email Address"
value={email}
onChangeText={setemail}
autoCapitalize="none"
autoCorrect= {false} />
</Spacer>
<Spacer>

<Input label="Password"
secureTextEntry
placeholder="Set a strong password"
value={password}
onChangeText={setpassword} 
autoCapitalize="none"
autoCorrect= {false}
/>

</Spacer>
 {state.errormessage ? <Text style={styles.te1}>{state.errormessage}</Text> : null}

<Spacer>
	<Button 
	title="Sign Up"
	onPress={()=>signup({email,password})} 
	/>
	</Spacer>
	</View>

	);

};

const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center",
		marginVertical: 60

	},
	te1:{
	color:'red',
	justifyContent:"center",
	margin: 20
}

});
otpsignuppage.navigationOptions=()=>{
return {
headerShown: false
};
};


export default otpsignuppage;

