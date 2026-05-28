import { ADD_ADDRESS, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_ADDRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../ActionTypes";

const addToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data
})

const removeFromCart = (index) => ({
    type: REMOVE_FROM_CART,
    payload: index
})

const addToWishList = (data) => ({
    type: ADD_TO_WISHLIST,
    payload: data
})

const removeFromWishList = (index) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index
})

const addAddress = (data) => ({
    type: ADD_ADDRESS,
    payload: data
})

const removeAddress = (index) => ({
    type: REMOVE_ADDRESS,
    payload: index
})

export { addToCart, removeFromCart, addToWishList, removeFromWishList, addAddress, removeAddress };