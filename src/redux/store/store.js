import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducer/cartReducer";
import { wishListReducer } from "../reducer/wishListReducer";
import { addressReducer } from "../reducer/addressReducer";
import { ordersReducer } from "../reducer/ordersReducer";

const rootReducer = combineReducers({ 
    cartReducer, 
    wishListReducer,
    addressReducer,
    ordersReducer
})

export const store = createStore(rootReducer)