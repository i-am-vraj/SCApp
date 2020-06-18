import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import UserType from './screens/UserType';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import SigninOTPSocial from './screens/SigninOTPSocial';
import Tp from './screens/Tp';
import WalkThrough from './screens/WalkThrough';


const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Welcome"
      headerMode="none"
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="UserType"
        component={UserType}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        name="SigninOTPSocial"
        component={SigninOTPSocial}
      />
      <Stack.Screen
        name="Tp"
        component={Tp}
      />
      <Stack.Screen
        name="WalkThrough"
        component={WalkThrough}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}