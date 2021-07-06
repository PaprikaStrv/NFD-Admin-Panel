import { simbirSoftAPI } from "../API/api";

const SET_ORDER_STATUS = "SET_ORDER_STATUS";
const SET_CUR_ORDER_STATUS = "SET_CUR_ORDER_STATUS";
const SET_ORDER_STATUS_RESPONSE = "SET_ORDER_STATUS_RESPONSE";

let initialState = {
  orderStatus: [],
  curOrderStatus: [],
  response: [],
};

const orderStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_STATUS: {
      return {
        ...state,
        orderStatus: action.orderStatus,
      };
    }
    case SET_CUR_ORDER_STATUS: {
      return {
        ...state,
        curOrderStatus: action.curOrderStatus,
      };
    }
    case SET_ORDER_STATUS_RESPONSE: {
      return {
        ...state,
        response: action.response,
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

export const setCurOrderStatus = (curOrderStatus) => ({
  type: SET_CUR_ORDER_STATUS,
  curOrderStatus,
});

export const setOrderStatusResponse = (response) => ({
  type: SET_ORDER_STATUS_RESPONSE,
  response,
});

export const getOrderStatus = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getOrderStatus();
    dispatch(setOrderStatus(response));
  };
};

export const getCurOrderStatus = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurOrderStatus(id);
    dispatch(setCurOrderStatus(response));
  };
};

export const postOrderStatus = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postOrderStatus(formData);
    dispatch(setOrderStatusResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const updateOrderStatus = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateOrderStatus(id, formData);
    dispatch(setOrderStatusResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export const deleteOrderStatus = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteOrderStatus(id);
    dispatch(setOrderStatusResponse(response));
    setTimeout(() => window.location.reload(), 1000);
  };
};

export default orderStatusReducer;
