import { simbirSoftAPI } from "../API/api";

const SET_RATES = "SET_RATES";
const SET_CUR_RATE = "SET_CUR_RATE";
const SET_RATE_RESPONSE = "SET_RATE_RESPONSE";

let intitialState = {
  rates: [],
  rate: [],
  response: [],
};

const ratesReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_RATES: {
      return {
        ...state,
        rates: action.rates,
      };
    }
    case SET_CUR_RATE: {
      return {
        ...state,
        rate: action.rate,
      };
    }
    case SET_RATE_RESPONSE: {
      return {
        ...state,
        response: action.response,
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

export const setRate = (rate) => ({
  type: SET_CUR_RATE,
  rate,
});

export const setRateResponse = (response) => ({
  type: SET_RATE_RESPONSE,
  response,
});

export const getRates = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getRates();
    dispatch(setRates(response));
  };
};

export const getRate = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getRate(id);
    dispatch(setRate(response));
  };
};

export const postRate = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postRate(formData);
    dispatch(setRateResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const updateRate = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateRate(id, formData);
    dispatch(setRateResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const deleteRate = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteRate(id);
    dispatch(setRateResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export default ratesReducer;
