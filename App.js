import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import homepage from './src/screens/homepage';
import otpsignuppage from './src/screens/otpsignuppage';
import signinpage from './src/screens/signinpage';

import viewpage from './src/screens/viewpage';

import otppage from './src/screens/otppage';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
const navigator= createSwitchNavigator({

otploginflow: createStackNavigator({
  Home: homepage,
  otpsignup: otpsignuppage,
  Otp: otppage,
  signin:signinpage
  }),

mainflow: viewpage




  });

const App= createAppContainer(navigator);

export default ()=>{
return (
<AuthProvider>
  <App ref={(navigator)=>{setNavigator(navigator)}} />
</AuthProvider>
  );
};

