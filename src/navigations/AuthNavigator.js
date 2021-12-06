import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "../screens/Login";
import Register from "../screens/Register";
import { LOGIN, REGISTER } from "../constants/routeName";

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} >
      <AuthStack.Screen name={LOGIN} component={SignIn} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
