import * as axios from "axios";
const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
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
};
