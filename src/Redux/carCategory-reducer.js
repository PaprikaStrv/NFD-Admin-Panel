import { simbirSoftAPI } from "../API/api";

const SET_CAR_CATEGORIES = "SET_CAR_CATEGORIES";
const SET_CUR_CAR_CATEGORY = "SET_CUR_CAT_CATEGORY";

let intitialState = {
  carCategories: [],
  carCategory: [],
};

const carCategoriesReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_CAR_CATEGORIES: {
      return {
        ...state,
        carCategories: action.carCategories,
      };
    }
    case SET_CUR_CAR_CATEGORY: {
      return {
        ...state,
        carCategory: action.carCategory,
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

export const setCarCategory = (carCategory) => ({
  type: SET_CUR_CAR_CATEGORY,
  carCategory,
});

export const getCarCategories = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCarCategory();
    dispatch(setCarCategories(response));
  };
};

export const getCarCategory = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurCarCategory(id);
    dispatch(setCarCategory(response));
  };
};

export const postCarCategory = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postCarCategory(formData);
    window.location.reload();
    alert("Категория добавлена успшно");
  };
};

export const updateCarCategory = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateCarCategory(id, formData);
    window.location.reload();
    alert("Категория изменена успшно");
  };
};

export const deleteCarCategory = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteCarCategory(id);
    window.location.reload();
    alert("Категория удалена успшно");
  };
};

export default carCategoriesReducer;
