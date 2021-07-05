import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Header} from 'react-native-elements';
import Spacer from '../components/Spacer';

const homepage=props=>{

return (


	<View style={styles.container}>
			<Header
  centerComponent={{ text: 'HOME', style: { color: '#fff', fontSize: 30 } }}
/>

<Spacer>
</Spacer>
<Text h4 style={styles.buttonstyle}>EFFORTS BY DEVANSHI CHADHA</Text>
<Spacer>
	<Button style={styles.buttonstyle}
	title="SIGN UP"
	onPress={()=> props.navigation.navigate('otpsignup')}   />
	</Spacer>
	<Spacer>
	<Button
	title="SIGN IN"
	onPress={()=> props.navigation.navigate('signin')}
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
buttonstyle:{
	padding: 20,
	margin: 20
},
buttonstyle1:{
	padding: 20,
	margin: 40
}


});

homepage.navigationOptions=()=>{
return {
headerShown: false
};
};


export default homepage;

