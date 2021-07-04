import { simbirSoftAPI } from "./../API/api";

const SET_POINTS = "SET_POINTS";
const SET_CUR_POINT = "SET_CUR_POINT";

let intitialState = {
  points: [],
  point: [],
};

const pointsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_POINTS: {
      return {
        ...state,
        points: action.points,
      };
    }
    case SET_CUR_POINT: {
      return {
        ...state,
        point: action.point,
      };
    }
    default:
      return state;
  }
};

export const setPoints = (points) => ({
  type: SET_POINTS,
  points,
});

export const setPoint = (point) => ({
  type: SET_CUR_POINT,
  point,
});

export const getPoints = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getPoints();
    dispatch(setPoints(response));
  };
};

export const getPoint = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getPoint(id);
    dispatch(setPoint(response));
  };
};

export const postPoint = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postPoint(formData);
    window.location.reload();
    alert("Место выдачи добавлено успешно");
  };
};

export const updatePoint = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updatePoint(id, formData);
    window.location.reload();
    alert("Место выдачи изменено успешно");
  };
};

export const deletePoint = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deletePoint(id);
    window.location.reload();
    alert("Место выдачи удалено успешно");
  };
};

export default pointsReducer;
