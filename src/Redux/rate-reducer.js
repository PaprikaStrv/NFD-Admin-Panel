import { simbirSoftAPI } from "../API/api";
const SET_RATES = "SET_RATES";

let intitialState = {
  rates: [],
};

const ratesReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_RATES: {
      return {
        ...state,
        rates: action.rates,
      };
    }
    default:
      return state;
  }
};

export const setRates = (rates) => ({
  type: SET_RATES,
  rates,
});

export const getRates = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getRates();
    dispatch(setRates(response));
  };
};

export default ratesReducer;
