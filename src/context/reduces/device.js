import {
  GET_DEVICE_FAIL,
  GET_DEVICE_LOADING,
  GET_DEVICE_SUCCESS,
} from "../../constants/actionTypes";

const device = (state, { type, payload }) => {
  switch (type) {
    case GET_DEVICE_LOADING:
      return {
        ...state,
        getDevice: {
          ...state.getDevice,
          loading: true,
          error: null,
        },
      };
    case GET_DEVICE_SUCCESS:
      return {
        ...state,
        getDevice: {
          ...state.getDevice,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_DEVICE_FAIL:
      return {
        ...state,
        getDevice: {
          ...state.getDevice,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default device;
