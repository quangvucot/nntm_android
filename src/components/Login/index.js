import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Container from "../Common/Container";
import CustomButton from "../Common/CustomButton";
import Input from "../Common/Input";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { REGISTER } from "../../constants/routeName";
import Message from "../Common/Message";

const LoginComponent = ({
  error,
  onChange,
  justSignedUp,
  onSubmit,
  loading,
  form,
}) => {
  const { navigate } = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Container>
      <Image style={styles.logo} height={80} width={80} />
      <View>
        <Text style={styles.title}>Nông nghiệp thông minh</Text>
        <Text style={styles.subtitle}>Đăng nhập ngay</Text>

        <View style={styles.form}>
          {justSignedUp && (
            <Message
              onDismiss={() => { }}
              success
              message="Đăng ký thành công"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => { }}
              danger
              message="Invalid credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error.error} />}
          <Input
            lable="Username"
            iconPosition="right"
            placehoder="Nhập Username"
            value={form.userName || null}
            onChangeText={value => {
              onChange({ name: 'username', value });
            }}
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
            onChangeText={value => {
              onChange({ name: 'password', value });
            }}
            placehoder="Nhập Mật Khẩu"
          />
          <CustomButton
            onPress={onSubmit}
            primary
            title="Đăng Nhập"
            loading={loading}
            disabled={false}
          />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Bạn không có tài khoản? </Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}
            >
              <Text style={styles.linkBtn}>Đăng Ký Ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
