import { useRoute } from "@react-navigation/core";
import React from "react"
import { View, Text } from 'react-native';
import FarmDetailComponent from "../../components/FarmDetail";
const FarmDetail = () => {
    const { params: { item = {} } = {} } = useRoute();
    return (
        <FarmDetailComponent item={item}></FarmDetailComponent>
    )
}
export default FarmDetail;