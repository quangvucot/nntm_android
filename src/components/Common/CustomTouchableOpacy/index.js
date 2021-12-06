import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import colors from "../../../assets/theme/colors";
import styles from "./styles";
const CustomTouchableOpacy = ({
  onPress,
  title,
  danger,
  secondary,
  yellow,
  disabled,
  style,
  ...props
}) => {
  const bg =
    "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";
  const getBGColor = () => {
    if (disabled) {
      return colors.gray;
    }
    if (yellow) {
      return colors.yellow;
    }
    if (danger) {
      return colors.red;
    }
    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBGColor() }, style]}
    >
      <View>
        <Text style={styles.content}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacy;
