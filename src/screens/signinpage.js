import React,{useState,useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Button,Header,Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/AuthContext';


const signinpage=()=>{
	const [email,setemail]=useState('');
	const [password,setpassword]=useState('');
	const {state,signin}=useContext(authcontext);

return (
	<View style={styles.container}>
	<Spacer>
	<Header
	 centerComponent={{ text: 'SIGN IN TO SKILLAPP', style: { color: '#fff', fontSize: 17 } }}
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
<Spacer>
 {state.errormessage ? <Text style={styles.te1}>{state.errormessage}</Text> : null}

</Spacer>
<Spacer>
	<Button
	title="SIGNIN"
	onPress={()=> signin({email,password}) }

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

signinpage.navigationOptions=()=>{
return {
headerShown: false
};
};

export default signinpage;

