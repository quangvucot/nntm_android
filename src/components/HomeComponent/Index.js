import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Message from "../Common/Message";
import colors from "../../assets/theme/colors";
import { CREATE_FARM, FARM_DETAIL, SETTING } from "../../constants/routeName";
const ListEmptyComponent = () => {
  return (
    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
      <Message info message="Không có thông tin vườn" />
    </View>
  );
};

const HomeComponent = ({ data, loading, setModalVisible }) => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigate(FARM_DETAIL, { item });
        }}
      >
        <View style={styles.item}>
          <Text style={styles.name}>Tên: {item.farmName}</Text>
          <Text style={styles.location}>Địa Điểm: {item.location}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.time}>Bắt đầu: {item.timeStart}</Text>
            <Text style={styles.time}>Số Ngày: {item.timeStart}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ paddingVertical: 20 }}>
      <Image
        source={require("../../assets/theme/images/green-farm-background.jpg")}
        style={StyleSheet.absoluteFillObject}
      />
      <TouchableOpacity
        style={styles.addFarm}
        onPress={() => {
          navigate(CREATE_FARM);
        }}
      >
        <Text style={styles.textFarm}>Thêm Vườn</Text>
      </TouchableOpacity>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item) => String(item.farmID)}
        contentContainerStyle={{
          padding: 10,
          paddingTop: StatusBar.currentHeight || 43,
        }}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default HomeComponent;
