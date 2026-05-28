import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducer/cartReducer";
import { wishListReducer } from "../reducer/wishListReducer";

const rootReducer = combineReducers({ 
    cartReducer, 
    wishListReducer
})

export const store = createStore(rootReducer)