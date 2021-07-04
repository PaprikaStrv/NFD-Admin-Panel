import { simbirSoftAPI } from "../API/api";

const SET_ORDER_STATUS = "SET_ORDER_STATUS";
const SET_CUR_ORDER_STATUS = "SET_CUR_ORDER_STATUS";

let initialState = {
  orderStatus: [],
  curOrderStatus: [],
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
    window.location.reload();
    alert("Статус заказа добавлен успешно");
  };
};

export const updateOrderStatus = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateOrderStatus(id, formData);
    window.location.reload();
    alert("Статус заказа обновлён успешно");
  };
};

export const deleteOrderStatus = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteOrderStatus(id);
    window.location.reload();
    alert("Статус заказа удалён успешно");
  };
};

export default orderStatusReducer;
