import * as axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("userToken");
const refreshToken = Cookies.get("refreshToken");

const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
  },
});

const instanceWithToken = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    Authorization: `Bearer ${token}`,
  },
});

const instanseRefreshToken = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    Authorization: `Bearer ${refreshToken}`,
  },
});

export const simbirSoftAPI = {
  authUser(formData) {
    return instance
      .post(`auth/login`, formData)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  refreshToken() {
    return instanseRefreshToken
      .post(`auth/refresh`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getOrders(page, cityId, orderStatusId) {
    return instanceWithToken
      .get(`order?page=${page}&limit=3`, {
        params: {
          cityId: cityId,
          orderStatusId: orderStatusId,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },

  getCities() {
    return instanceWithToken.get(`city`).then((response) => {
      return response.data;
    });
  },

  getOrderStatus() {
    return instanceWithToken.get(`orderStatus`).then((response) => {
      return response.data;
    });
  },

  getCars(page) {
    return instanceWithToken
      .get(`car?page=${page}&limit=7`)
      .then((response) => {
        return response.data;
      });
  },

  getCategory() {
    return instanceWithToken.get(`category`).then((response) => {
      return response.data;
    });
  },

  postCar(formData) {
    return instanceWithToken.post("car", formData).then((response) => {
      return response.data;
    });
  },

  getCurrentCar(id) {
    return instanceWithToken.get(`car?id=${id}`).then((response) => {
      return response.data;
    });
  },

  deleteCar(id) {
    return instanceWithToken.delete(`car/${id}`).then((response) => {
      return response.data;
    });
  },
};
