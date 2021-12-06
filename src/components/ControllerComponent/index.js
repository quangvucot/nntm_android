import React, { useState } from "react";
import {
  View,
  Switch,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";

const ControllerComponent = ({ data, loading }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(0);
  // const relay = data.data.relay1;
  const toggleSwitch = () => {
    if (value == 0) {
      setValue(1);
    } else if (value == 1) {
      setValue(0);
    }
  };
  return (
    <View style={styles.container}>
      {/* {loading && (
        <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
          <ActivityIndicator color={{ colors: "blue" }} size="large" />
        </View>
      )} */}
      {!loading && (
        <View>
          <Text>My check {data.relay1}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={data.relay1 == 1 ? true : false}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ControllerComponent;
