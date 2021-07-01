import { simbirSoftAPI } from "../API/api";
const SET_RATE_TYPE = "SET_RATE_TYPE";

let intitialState = {
  rateType: [],
};

const rateTypeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_RATE_TYPE: {
      return {
        ...state,
        rateType: action.rateType,
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

export const getRateType = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getRateType();
    dispatch(setRateType(response));
  };
};

export default rateTypeReducer;
