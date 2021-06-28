import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./login-reducer";
import orderReducer from "./order-reducer";
import citiesReducer from "./cities-reducer";
import orderStatusReducer from "./orderStatus-reducer";
import carsReducer from "./cars-reducer";

let reducers = combineReducers({
  login: loginReducer,
  order: orderReducer,
  cities: citiesReducer,
  orderStatus: orderStatusReducer,
  cars: carsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
