import React, { useContext, useState, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import RegisterComponent from "../../components/Signup";
import { GlobalContext } from '../../context/Provider';
import register, { clearAuthState } from '../../context/actions/auth/register';
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeName";

const Register = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});

  const {
    authDispatch,
    authState: { error, loading, data },
  } = useContext(GlobalContext);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return { ...prev, [name]: 'Mật khẩu ít nhất 6 kí tự' };
          });
        } else {
          setErrors(prev => {
            return { ...prev, [name]: null };
          });
        }
      } else {
        setErrors(prev => {
          return { ...prev, [name]: null };
        });
      }
    } else {
      setErrors(prev => {
        return { ...prev, [name]: 'This field is requied' };
      });
    }
  };
  const onSubmit = () => {
    //Validations
    // console.log('form :>> ', form);
    if (!form.username) {
      setErrors(prev => {
        return { ...prev, username: 'Please Enter Your Username' };
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return { ...prev, password: 'Điền mật khẩu của bạn' };
      });
    }
    // if (!form.repeatPassword) {
    //   setErrors(prev => {
    //     return { ...prev, repeatPassword: 'Please Enter Your Password' };
    //   });
    // }
    if (!form.phoneNumber) {
      setErrors(prev => {
        return { ...prev, phoneNumber: 'Nhập đúng số điện thoại của bạn' };
      });
    }

    if (
      Object.values(form).length === 3 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch)(response => {
        navigate(LOGIN, { data: response });
      });
    } else {
      console.log("Nothing ")
    }
  };
  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};
export default Register;
