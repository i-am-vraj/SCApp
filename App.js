import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from "react-navigation-stack";
import UserType from './screens/UserType';
import Welcome from './screens/Welcome';


// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }


// const AppNavigator = createStackNavigator({
//   Welcome,
//   UserType
// },
//   {
//     initialRouteName: "Welcome"
//   });

// const AppContainer = createAppContainer(AppNavigator);


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
    </Stack.Navigator>
    </NavigationContainer>
  );
}