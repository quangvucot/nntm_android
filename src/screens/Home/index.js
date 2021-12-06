import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState, useRef, useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import HomeComponent from "../../components/HomeComponent/Index";
import getFarm from "../../context/actions/farm/getFarm";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const [dataUuid, setDataUuid] = useState({});

  const getData = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user !== null) {
      const value = JSON.parse(user).uuid;
      setDataUuid(value);
    } else {
      console.log("Nothing", "Nothing")
    }
  }

  const {
    farmDispatch,
    farmState: {
      getFarm: { data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getData();
    getFarm()({ dataUuid })(farmDispatch);
  }, [dataUuid]);

  return (
    <HomeComponent
      data={data.data}
    />
  );
};
export default Home;
