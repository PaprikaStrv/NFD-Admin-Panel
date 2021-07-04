import { simbirSoftAPI } from "../API/api";

const SET_RATES = "SET_RATES";
const SET_CUR_RATE = "SET_CUR_RATE";

let intitialState = {
  rates: [],
  rate: [],
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
    window.location.reload();
    alert("Тариф добавлен успешно");
  };
};

export const updateRate = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateRate(id, formData);
    window.location.reload();
    alert("Тариф изменён успешно");
  };
};

export const deleteRate = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteRate(id);
    window.location.reload();
    alert("Тариф удалён успешно");
  };
};

export default ratesReducer;
