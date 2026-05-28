import { View, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from "../../common/CartCard";
import { addToWishList, removeFromCart } from '../../redux/actions/Actions';

const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartReducer.cartItems)

    return (
        <View style={{ flex: 1, marginTop: 32, marginBottom: 60 }}>
            <FlatList 
                data={cartData}
                renderItem={({ item, index}) => {
                    return (
                        <CartCard 
                            item={item}
                            removeItemFromCart={() => {
                                dispatch(removeFromCart(index))
                            }}
                            addItemToWishList={(item) => {
                                dispatch(addToWishList(item))
                            }}
                        />
                    )
                }}
            />
        </View>
    )
}

export default Cart