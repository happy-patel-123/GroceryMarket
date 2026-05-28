import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionTypes"

const intialWishListState = {
    wishListItems: []
}

const wishListReducer = (state = intialWishListState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: 
            return {
                ...state,
                wishListItems: [...state.wishListItems, action.payload]
            }

        case REMOVE_FROM_WISHLIST: 
            const newWishListItems = state.wishListItems.filter((item, index) => {
                return index !== action.payload
            })
            
            return {
                ...state,
                wishListItems: newWishListItems
            }
        
        default: 
            return state;
    }
}

export { wishListReducer }
