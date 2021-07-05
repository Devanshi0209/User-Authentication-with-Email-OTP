import React,{useState,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Header, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { AsyncStorage } from 'react-native';
import {Context as authcontext} from '../context/AuthContext';



const otppage=()=>{
	const [sentotp,setotp]=useState('');
const {state,signup,verifyotp}=useContext(authcontext);

const [useremail,setuseremail]=useState('');
AsyncStorage.getItem('email').then(value => {
      setuseremail(JSON.parse(value))
    }).done();
console.log("onotppage");

return (
	<View>
	<Spacer>
	<Header
	 centerComponent={{ text: 'ENTER OTP', style: { color: '#fff', fontSize: 17 } }}
	  />
	  </Spacer>

	<Spacer>
<Input label="OTP"
placeholder="Enter valid OTP sent to your email address"
value={sentotp}
onChangeText={setotp}
autoCapitalize="none"
autoCorrect= {false} />
</Spacer>
<Spacer>
 {state.errormessage ? <Text style={styles.te1}>{state.errormessage}</Text> : null}

</Spacer>
<Spacer>
	<Button 
	title="VERIFY OTP"
	onPress={()=>verifyotp({sentotp,useremail})} 
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
otppage.navigationOptions=()=>{
return {
headerShown: false
};
};
export default otppage;
