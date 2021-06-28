
import { simbirSoftAPI } from './../API/api';
const SET_CAR_LIST = "SET_CAR_LIST";

let initialState = {
    cars: [],
};

const carsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CAR_LIST: {
            return {
                ...state,
                ...action,
                cars: action.cars,
            }
        }
        default:
            return state;
    }
};

export const setCarList = (cars) => ({
    type: SET_CAR_LIST,
    cars,
});

export const getCars = (page) => {
    return async dispatch => {
        const response = await simbirSoftAPI.getCars(page);
        dispatch(setCarList(response));
    }
};

export default carsReducer;