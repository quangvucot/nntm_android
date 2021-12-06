import React, { createContext, useReducer } from "react";
import {} from "react-native";
import AuthInitialState from "../context/initialStates/authInitialState";
import farmInitialState from "./initialStates/farmInitialState";
import deviceInitialState from "./initialStates/deviceInitialStates";
export const GlobalContext = createContext({});
import auth from "./reduces/auth";
import device from "./reduces/device";
import farm from "./reduces/farm";
import control from "./reduces/control";
import controlInitialState from "./initialStates/controlInitialState";

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, AuthInitialState);
  const [farmState, farmDispatch] = useReducer(farm, farmInitialState);
  const [deviceState, deviceDispatch] = useReducer(device, deviceInitialState);
  const [valueControlState, controlDispatch] = useReducer(
    control,
    controlInitialState
  );
  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        farmState,
        farmDispatch,
        deviceState,
        deviceDispatch,
        valueControlState,
        controlDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
