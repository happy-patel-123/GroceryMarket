import { ADD_ADDRESS, REMOVE_ADDRESS } from "../ActionTypes"

const intialAddressState = {
    addressItems: []
}

const addressReducer = (state = intialAddressState, action) => {
    switch(action.type) {
        case ADD_ADDRESS: 
            return {
                ...state,
                addressItems: [...state.addressItems, action.payload]
            }

        case REMOVE_ADDRESS:
            const newAddressItems = state.addressItems.filter((item, index) => {
                return index !== action.payload  
            })

            return {
                ...state,
                addressItems: newAddressItems
            }

        default: 
            return state;
    }
}

export { addressReducer }