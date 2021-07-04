import { simbirSoftAPI } from "../API/api";

const SET_RATE_TYPE = "SET_RATE_TYPE";
const SET_CUR_RATE_TYPE = "SET_CUR_RATE_TYPE";

let intitialState = {
  rateType: [],
  curRateType: [],
};

const rateTypeReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_RATE_TYPE: {
      return {
        ...state,
        rateType: action.rateType,
      };
    }
    case SET_CUR_RATE_TYPE: {
      return {
        ...state,
        curRateType: action.curRateType,
      };
    }
    default:
      return state;
  }
};

export const setRateType = (rateType) => ({
  type: SET_RATE_TYPE,
  rateType,
});

export const setCurRateType = (curRateType) => ({
  type: SET_CUR_RATE_TYPE,
  curRateType,
});

export const getRateType = () => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getRateType();
    dispatch(setRateType(response));
  };
};

export const getCurRateType = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.getCurRateType(id);
    dispatch(setCurRateType(response));
  };
};

export const postRateType = (formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.postRateType(formData);
    window.location.reload();
    alert("Тип тарифа добавлен успешно");
  };
};

export const updateRateType = (id, formData) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.updateRateType(id, formData);
    window.location.reload();
    alert("Тип тарифа изменён успешно");
  };
};

export const deleteRateType = (id) => {
  return async (dispatch) => {
    const response = await simbirSoftAPI.deleteRateType(id);
    window.location.reload();
    alert("Тип тарифа удалён успешно");
  };
};

export default rateTypeReducer;
