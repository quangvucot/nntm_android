import {
  GET_CONTROL_FAIL,
  GET_CONTROL_LOADING,
  GET_CONTROL_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";

export default () => (dispatch) => {
  dispatch({
    type: GET_CONTROL_LOADING,
  });
  axios
    .get("/sensors/relayDevice")
    .then((res) => {
      dispatch({
        type: GET_CONTROL_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log("errors: ", err);
      dispatch({
        type: GET_CONTROL_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "some thing went wrong, try again" },
      });
    });
};
