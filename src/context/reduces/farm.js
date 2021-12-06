import {
  CREATE_FARMS_FAIL,
  CREATE_FARMS_LOADING,
  CREATE_FARMS_SUCCESS,
  GET_FARMS_FAIL,
  GET_FARMS_LOADING,
  GET_FARMS_SUCCESS,
} from "../../constants/actionTypes";

const farms = (state, { type, payload }) => {
  switch (type) {
    case CREATE_FARMS_LOADING:
      return {
        ...state,
        createFarm: {
          ...state.createFarm,
          loading: true,
          error: null,
        },
      };
    case CREATE_FARMS_SUCCESS:
      return {
        ...state,
        createFarm: {
          ...state.createFarm,
          loading: false,
          data: payload,
          error: null,
        },
        // getFarm: {
        //     ...state.getFarm,
        //     loading: false,
        //     data: [payload, ...state.getFarm.data],
        //     error: null,
        // },
      };
    case CREATE_FARMS_FAIL:
      return {
        ...state,
        createFarm: {
          ...state.createFarm,
          loading: false,
          error: payload,
        },
      };
    case GET_FARMS_LOADING:
      return {
        ...state,
        getFarm: {
          ...state.getFarm,
          loading: true,
          error: null,
        },
      };
    case GET_FARMS_SUCCESS:
      return {
        ...state,
        getFarm: {
          ...state.getFarm,
          loading: false,
          data: payload,
          error: null,
        },
      };
    case GET_FARMS_FAIL:
      return {
        ...state,
        getFarm: {
          ...state.getFarm,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default farms;
