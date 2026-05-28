import { combineReducers, createStore } from "redux";
import { cartReducer } from "../reducer/cartReducer";
import { wishListReducer } from "../reducer/wishListReducer";
import { addressReducer } from "../reducer/addressReducer";

const rootReducer = combineReducers({ 
    cartReducer, 
    wishListReducer,
    addressReducer
})

export const store = createStore(rootReducer)