import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from '@react-navigation/native';
import LoginComponent from "../../components/Login";
import { GlobalContext } from '../../context/Provider'
import login from '../../context/actions/auth/login';
const SignIn = () => {
  const [form, setForm] = useState({});
  const { params } = useRoute();
  const [justSignedUp, setJustSignedUp] = useState(false);

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({ ...form, username: params.data.username });
      console.log(form.username);
    }
  }, [params]);

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.username && form.password) {
      login(form)(authDispatch);
    }
  };

  const onChange = ({ name, value }) => {
    setJustSignedUp(false);
    setForm({ ...form, [name]: value });
  };
  return (

    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />);
};
export default SignIn;
