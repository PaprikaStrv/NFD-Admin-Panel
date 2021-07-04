import { simbirSoftAPI } from "./../API/api";

const SET_CITIES = "SET_CITIES";
const SET_CUR_CITY = "SET_CUR_CITY";


let initialState = {
  cities: [],
  curCity: [],
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITIES: {
      return {
        ...state,
        cities: action.cities,
      };
    }
    case SET_CUR_CITY: {
      return {
        ...state,
        curCity: action.curCity,
      }
    }
    default:
      return state;
  }
};

export const setCities = (cities) => ({
  type: SET_CITIES,
  cities,
});

export const setCurCity = (curCity) => ({
  type: SET_CUR_CITY,
  curCity,
})

export const getCities = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCities();
    dispatch(setCities(response));
  };
};

export const getCurCity = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurCity(id);
    dispatch(setCurCity(response));
  };
};

export const postCity = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postCity(formData);
    window.location.reload();
    alert("Город добавлен успешно");
  };
};

export const updateCity = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateCity(id, formData);
    window.location.reload();
    alert("Город изменён успешно");
  };
};

export const deleteCity = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteCity(id);
    window.location.reload();
    alert("Город удалён успешно");
  };
};

export default citiesReducer;
