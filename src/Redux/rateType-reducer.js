import { simbirSoftAPI } from "../API/api";

const SET_RATE_TYPE = "SET_RATE_TYPE";
const SET_CUR_RATE_TYPE = "SET_CUR_RATE_TYPE";
const SET_RATE_TYPE_RESPONSE = "SET_RATE_TYPE_RESPONSE";

let intitialState = {
  rateType: [],
  curRateType: [],
  response: [],
};

const rateTypeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_RATE_TYPE: {
      return {
        ...state,
        rateType: action.rateType,
      };
    }
    case SET_CUR_RATE_TYPE: {
      return {
        ...state,
        curRateType: action.curRateType,
      };
    }
    case SET_RATE_TYPE_RESPONSE: {
      return {
        ...state,
        response: action.response,
      };
    }
    default:
      return state;
  }
};

export const setRateType = (rateType) => ({
  type: SET_RATE_TYPE,
  rateType,
});

export const setCurRateType = (curRateType) => ({
  type: SET_CUR_RATE_TYPE,
  curRateType,
});

export const setRateTypeResponse = (response) => ({
  type: SET_RATE_TYPE_RESPONSE,
  response,
});

export const getRateType = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getRateType();
    dispatch(setRateType(response));
  };
};

export const getCurRateType = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurRateType(id);
    dispatch(setCurRateType(response));
  };
};

export const postRateType = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postRateType(formData);
    dispatch(setRateTypeResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const updateRateType = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateRateType(id, formData);
    dispatch(setRateTypeResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const deleteRateType = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteRateType(id);
    dispatch(setRateTypeResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export default rateTypeReducer;
