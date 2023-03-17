import { combineReducers } from "redux";
import productReducer from "./product"
import userReducer from "./user"
import adminReducer from "./admin"
import orderReducer from "./order"
import messageReducer from "./message"

const rootReducer = combineReducers ({productReducer,userReducer,adminReducer,orderReducer,messageReducer});

export default rootReducer ;