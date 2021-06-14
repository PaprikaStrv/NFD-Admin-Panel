import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./login-reducer";
import orderReducer from "./order-reducer";

let reducers = combineReducers({
  login: loginReducer,
  order: orderReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
