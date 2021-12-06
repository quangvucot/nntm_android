import {
  GET_CONTROL_FAIL,
  GET_CONTROL_LOADING,
  GET_CONTROL_SUCCESS,
  GET_DEVICE_FAIL,
  GET_DEVICE_LOADING,
  GET_DEVICE_SUCCESS,
} from "../../constants/actionTypes";

const control = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTROL_LOADING:
      return {
        ...state,
        getValueControl: {
          ...state.getValueControl,
          loading: true,
          error: null,
        },
      };
    case GET_CONTROL_SUCCESS:
      return {
        ...state,
        getValueControl: {
          ...state.getValueControl,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_CONTROL_FAIL:
      return {
        ...state,
        getValueControl: {
          ...state.getValueControl,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default control;
