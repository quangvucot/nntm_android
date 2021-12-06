import {
  GET_DEVICE_FAIL,
  GET_DEVICE_LOADING,
  GET_DEVICE_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";

export default () =>
  ({ deviceID }) =>
  (dispatch) => {
    dispatch({
      type: GET_DEVICE_LOADING,
    });
    console.log("ID Farms.Device: ", `/sensors/${deviceID}/`);
    axios
      .get(`/sensors/${deviceID}/`)
      .then((res) => {
        dispatch({
          type: GET_DEVICE_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log("errors: ", err);
        dispatch({
          type: GET_DEVICE_FAIL,
          payload: err.response
            ? err.response.data
            : { error: "some thing went wrong, try again" },
        });
      });
  };
