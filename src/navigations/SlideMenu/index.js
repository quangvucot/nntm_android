import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import styles from "./style";
import Icon from "../../components/Common/Icons";
import Container from "../../components/Common/Container";
import logoutUser from "../../context/actions/auth/logoutUser";
import HomeComponent from "../../components/HomeComponent/Index";
import { HOME, USER } from "../../constants/routeName";
import { useNavigation } from "@react-navigation/native";
const SlideMenu = ({ navigation, authDispatch }) => {
  const { navigate } = useNavigation();
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you sure to logout?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "OK",
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon type="materialIcon" size={30} name="home" />,
      name: "Trang chủ",
      onPress: () => {
        navigate(HOME);
      },
    },
    {
      icon: <Icon type="materialIcon" size={30} name="person" />,
      name: "Thông tin người dùng",
      onPress: () => {
        navigate(USER);
      },
    },

    {
      icon: <Icon type="materialIcon" size={30} name="settings" />,
      name: "Cài Đặt",
      onPress: () => {
        Alert.alert("Con gà");
      },
    },

    {
      icon: <Icon type="materialIcon" size={30} name="logout" />,
      name: "Đăng Xuất",
      onPress: handleLogout,
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image height={70} width={70} style={styles.logo} />
        <View style={{ paddingHorizontal: 10 }}>
          {menuItems.map(({ name, icon, onPress }) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SlideMenu;
