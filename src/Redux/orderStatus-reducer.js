import { simbirSoftAPI } from "../API/api";
const SET_ORDER_STATUS = "SET_ORDER_STATUS";
let initialState = {
  orderStatus: [],
};

const orderStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_STATUS: {
      return {
        ...state,
        ...action,
        orderStatus: action.orderStatus,
      };
    }
    default:
      return state;
  }
};

export const setOrderStatus = (orderStatus) => ({
  type: SET_ORDER_STATUS,
  orderStatus,
});

export const getOrderStatus = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getOrderStatus();
    dispatch(setOrderStatus(response));
  };
};

export default orderStatusReducer;
