import * as axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("userToken");

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

  getOrders(page) {
    return instanceWithToken
      .get(`order?page=${page}&limit=3`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
  },
};
