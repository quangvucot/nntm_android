import 'react-native-gesture-handler';
import React from "react";
import GlobalProvider from "./src/context/Provider";
import AppNavContainer from "./src/navigations";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>

  );
};


export default App;
