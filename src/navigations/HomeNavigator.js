import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import FarmDetail from "../screens/FarmDetails";
import {
  CONTROLLER,
  CREATE_FARM,
  DEVICE,
  FARM_DETAIL,
  HOME,
  HOME_NAVIGATOR,
  SENSOR,
  SETTING,
  USER,
} from "../constants/routeName";
import { Text } from "react-native";
import Device from "../screens/Device";
import Controller from "../screens/Controller";
import User from "../screens/User";
import CreateFarm from "../screens/CreateFarm";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <HomeStack.Screen name={HOME} component={Home}></HomeStack.Screen>
      <HomeStack.Screen name={SETTING} component={Setting}></HomeStack.Screen>
      <HomeStack.Screen
        name={FARM_DETAIL}
        component={FarmDetail}
      ></HomeStack.Screen>
      <HomeStack.Screen name={DEVICE} component={Device}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTROLLER}
        component={Controller}
      ></HomeStack.Screen>
      <HomeStack.Screen name={USER} component={User}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_FARM}
        component={CreateFarm}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
