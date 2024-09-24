import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './src/screens/auth/Onboarding';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
// import GestureHandlerRefContext from '../utils/GestureHandlerRefContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Onboarding" component={Onboarding}/>
      <Stack.Screen name="Signin" component={Signin}/>
      <Stack.Screen name="Signup" component={Signup}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;