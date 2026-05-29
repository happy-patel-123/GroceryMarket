import { ADD_ORDERS, REMOVE_ORDERS } from "../ActionTypes"

const intialOrderState = {
    orderItems: []
}

const ordersReducer = (state = intialOrderState, action) => {
    switch(action.type) {
        case ADD_ORDERS: 
            return {
                ...state,
                orderItems: [...state.orderItems, action.payload]
            }

        case REMOVE_ORDERS:
            const newCartItems = state.orderItems.filter((item, index) => {
                return index !== action.payload  
            })

            return {
                ...state,
                orderItems: newCartItems
            }

        default: 
            return state;
    }
}

export { ordersReducer }