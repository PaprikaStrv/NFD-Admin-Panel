import { simbirSoftAPI } from "./../API/api";

const SET_CAR_LIST = "SET_CAR_LIST";
const SET_CATEGORY = "SET_CATEGORY";
const SET_RESPONSE = "SET_RESPONSE";
const SET_CURRENT_CAR = "SET_CURRENT_CAR";

let initialState = {
  cars: [],
  category: [],
  response: [],
  currentCar: [],
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR_LIST: {
      return {
        ...state,
        cars: action.cars,
      };
    }
    case SET_CURRENT_CAR: {
      return {
        ...state,
        currentCar: action.currentCar,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }
    case SET_RESPONSE: {
      return {
        ...state,
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

export const setCurrentCar = (currentCar) => ({
  type: SET_CURRENT_CAR,
  currentCar,
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
    // window.location.reload();
    // window.location = "/nfd-admin-panel/";
  };
};

export const getCurrentCar = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurrentCar(id);
    dispatch(setCurrentCar(response));
  };
};

export const deleteCar = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteCar(id);
    dispatch(setResponse(response));
    // window.location.reload();
    // window.location = "nfd-admin-panel/Cars";
  };
};

export const updateCar = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateCar(id, formData);
    dispatch(setResponse(response));
    // window.location.reload();
    // window.location = "/nfd-admin-panel/";
  };
};

export default carsReducer;
