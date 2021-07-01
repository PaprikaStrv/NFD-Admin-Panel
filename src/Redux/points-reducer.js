import { simbirSoftAPI } from "./../API/api";
const SET_POINTS = "SET_POINTS";

let intitialState = {
  points: [],
};

const pointsReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_POINTS: {
      return {
        ...state,
        points: action.points,
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

export const getPoints = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getPoints();
    dispatch(setPoints(response));
  };
};

export default pointsReducer;
