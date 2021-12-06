import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const DeviceCustom = ({ title, icon, value }) => {
  return (
    <View style={styles.item}>
      <View>{icon && icon}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};
export default DeviceCustom;
