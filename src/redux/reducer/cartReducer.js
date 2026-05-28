import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes"

const intialCartState = {
    cartItems: []
}

const cartReducer = (state = intialCartState, action) => {
    switch(action.type) {
        case ADD_TO_CART: 
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }

        case REMOVE_FROM_CART:
            const newCartItems = state.cartItems.filter((item, index) => {
                return index !== action.payload  
            })

            return {
                ...state,
                cartItems: newCartItems
            }

        default: 
            return state;
    }
}

export { cartReducer }