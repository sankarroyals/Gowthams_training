import { combineReducers } from "redux";

import { ShoppingReducers } from "./ProductsReducers";
import { loginReducer } from "./LoginReducer";

export const totalReducers = combineReducers({
    ShoppingReducers,
    loginReducer
})