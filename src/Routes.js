import "react-native-gesture-handler";
import React from "react";
import {StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/auth/Onboarding";
import Signin from "./screens/auth/Signin";
import Signup from './screens/auth/Signup';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  });
