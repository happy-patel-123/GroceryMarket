import { ADD_ADDRESS, ADD_ORDERS, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_ADDRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, REMOVE_ORDERS } from "../ActionTypes";

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

const addOrders = (data) => ({
    type: ADD_ORDERS,
    payload: data
})

const removeOrders = (index) => ({
    type: REMOVE_ORDERS,
    payload: index
})

export { addToCart, removeFromCart, addToWishList, removeFromWishList, addAddress, removeAddress, addOrders, removeOrders };