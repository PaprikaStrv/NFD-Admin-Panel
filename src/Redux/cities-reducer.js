import { simbirSoftAPI } from "./../API/api";
const SET_CITIES = "SET_CITIES";
let initialState = {
  cities: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES: {
      return {
        ...state,
        cities: action.cities,
      };
    }
    default:
      return state;
  }
};

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});

export const getCities = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCities();
    dispatch(setCities(response));
  };
};

export const getLimitCities = (page) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getLimitCities(page);
    dispatch(setCities(response));
  };
};

export default citiesReducer;
