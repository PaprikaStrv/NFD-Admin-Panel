import { simbirSoftAPI } from "./../API/api";

const SET_CAR_LIST = "SET_CAR_LIST";
const SET_CATEGORY = "SET_CATEGORY";
const SET_RESPONSE = "SET_RESPONSE";

let initialState = {
  cars: [],
  category: [],
  response: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_LIST: {
      return {
        ...state,
        ...action,
        cars: action.cars,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        ...action,
        category: action.category,
      };
    }
    case SET_RESPONSE: {
      return {
        ...state,
        ...action,
        response: action.response,
      };
    }
    default:
      return state;
  }
};

export const setCarList = (cars) => ({
  type: SET_CAR_LIST,
  cars,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const setResponse = (response) => ({
  type: SET_RESPONSE,
  response,
});

export const getCars = (page) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCars(page);
    dispatch(setCarList(response));
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCategory();
    dispatch(setCategory(response));
  };
};

export const postCar = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postCar(formData);
    dispatch(setResponse(response));
  };
};

export default carsReducer;
