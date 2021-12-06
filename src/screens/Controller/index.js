import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import ControllerComponent from "../../components/ControllerComponent";
import getValueControl from "../../context/actions/device/getValueControl";
import { GlobalContext } from "../../context/Provider";
const Controller = () => {
  const [valueCurrent, setValueCurrent] = useState({});
  const {
    controlDispatch,
    valueControlState: {
      getValueControl: { data, loading },
    },
  } = useContext(GlobalContext);
  useEffect(() => {
    getValueControl()(controlDispatch);
    setValueCurrent(data);
  }, [valueCurrent]);
  console.log("valueCurrent", valueCurrent);
  return <ControllerComponent data={data} loading={loading} />;
};

export default Controller;
