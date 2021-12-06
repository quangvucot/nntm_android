import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ password, username: username }) =>
  (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post("auth/login", {
        password,
        username,
      })
      .then((res) => {
        if (JSON.stringify(res.data.success) == 1) {
          AsyncStorage.setItem("user", JSON.stringify(res.data));
          AsyncStorage.setItem("uuid", JSON.stringify(res.data.uuid));
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
        } else if (JSON.stringify(res.data.success) == 0) {
          dispatch({
            type: LOGIN_FAIL,
            payload: { error: "Tài khoản hoặc mật khẩu không chính xác" },
          });
        }
      })
      .catch((err) => {
        console.log("errocx", err.message);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : { error: "SomeThing went wrong. Try again" },
        });
      });
  };
