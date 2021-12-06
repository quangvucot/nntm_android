import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Container from "../Common/Container";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeName";
import Message from "../Common/Message";

const RegisterComponent = ({
  onSubmit,
  onChange,
  errors,
  form,
  error,
  loading,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const { navigate } = useNavigation();
  return (
    <Container>
      <View>
        <Text style={styles.title}>Nông Nghiệp Thông Minh</Text>
        <Text style={styles.subtitle}>Create new free account</Text>
        <View style={styles.form}>
          {error?.error && (
            <Message
              danger
              retry
              retryFn={() => {
                console.log("2222 => ", 2222);
              }}
              message={error.error}
            />
          )}
          {/* <Input
            lable="Họ Tên"
            iconPosition="r ight"
            placehoder="Họ Tên"
            onChangeText={value => {
              onChange({ name: 'fullname', value });
            }}
          /> */}
          <Input
            lable="Số Điện Thoại"
            iconPosition="right"
            placehoder="Số Điện Thoại"
            onChangeText={(value) => {
              onChange({ name: "phoneNumber", value });
            }}
            error={errors.password || error?.password?.[0]}
          />
          <Input
            lable="Username"
            iconPosition="right"
            placehoder="Nhập Username"
            onChangeText={(value) => {
              onChange({ name: "username", value });
            }}
            error={errors.password || error?.password?.[0]}
          />
          <Input
            lable="Mật Khẩu"
            icon={
              <TouchableOpacity
                onPress={() => {
                  showPassword ? setShowPassword(false) : setShowPassword(true);
                }}
              >
                <Text>{showPassword ? "Hiện" : "Ẩn"}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            secureTextEntry={showPassword}
            placehoder="Nhập Mật Khẩu"
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
            error={errors.password || error?.password?.[0]}
          />

          {/* <Input
            lable="Nhập lại Mật Khẩu"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
            placehoder="Nhập lại Mật Khẩu"
            onChangeText={() => { }}
          /> */}
          <CustomButton
            onPress={onSubmit}
            primary
            title="Đăng ký"
            loading={loading}
            disabled={loading}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Bạn có tài khoản? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}
            >
              <Text style={styles.linkBtn}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
