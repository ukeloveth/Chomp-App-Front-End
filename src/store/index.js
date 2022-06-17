import { combineReducers, createStore } from "redux";
import { handleResponseWithLoginCheck } from "../services/BaseService";
import basketReducer from "./reducers/basket";
import userReducer from "./reducers/user";

handleResponseWithLoginCheck();

const allReducers = combineReducers({
    user: userReducer,
    basket: basketReducer,
})

const store = createStore(allReducers);

export default store;