import React, { useContext } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeName";
import { View } from "react-native";
import SlideMenu from "./SlideMenu";
import { GlobalContext } from "../context/Provider";
const getDrawerContent = (navigation, authDispatch) => {
  return <SlideMenu navigation={navigation} authDispatch={authDispatch} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const { authDispatch } = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      // screenOptions={{ headerShown: false }}
      drawerType="slide"
      drawerContent={({ navigation }) =>
        getDrawerContent(navigation, authDispatch)
      }
    >
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
