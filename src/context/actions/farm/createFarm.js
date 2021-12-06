import {
  CREATE_FARMS_FAIL,
  CREATE_FARMS_LOADING,
  CREATE_FARMS_SUCCESS,
} from "../../../constants/actionTypes";
import axios from "../../../helpers/axiosInterceptor";
export default (form) => (dispatch) => (onSuccess) => {
  const requesPayload = {
    farmName: form.farmName,
    location: form.location || "",
    timeStart: form.timeStart || "",
    timeFinish: form.timeFinish || "",
    area: form.area || "",
    personID: form.personID,
    deviceID: form.deviceID,
    treeID: form.treeID,
  };
  dispatch({
    type: CREATE_FARMS_LOADING,
  });
  axios
    .post("/farm/", requesPayload)
    .then((res) => {
      console.log("res.data", res.data);
      dispatch({
        type: CREATE_FARMS_SUCCESS,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => {
      console.log("errrrrsdfsdf", err.message);
      dispatch({
        type: CREATE_FARMS_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "some thing went wrong, try again" },
      });
    });
};
