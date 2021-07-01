import { simbirSoftAPI } from "../API/api";
const SET_CAR_CATEGORIES = "SET_CAR_CATEGORIES";

let intitialState = {
  carCategories: [],
};

const carCategoriesReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_CAR_CATEGORIES: {
      return {
        ...state,
        carCategories: action.carCategories,
      };
    }
    default:
      return state;
  }
};

export const setCarCategories = (carCategories) => ({
  type: SET_CAR_CATEGORIES,
  carCategories,
});

export const getCarCategories = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCarCategory();
    dispatch(setCarCategories(response));
  };
};

export default carCategoriesReducer;
