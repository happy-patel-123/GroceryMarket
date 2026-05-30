import { View, FlatList, Text, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from "../../common/CartCard";
import { addToWishList, removeFromCart } from '../../redux/actions/Actions';
import CustomButton from '../../common/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartReducer.cartItems)
    const addressData = useSelector(state => state.addressReducer.addressItems)
    

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, marginTop: 32, marginBottom: 60 }}>
            {
                cartData.length ? (
                    <>
                        <FlatList
                            data={cartData}
                            renderItem={({ item, index }) => {
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
                        <View style={{ marginBottom: 32, position: 'absolute', width: '100%', bottom: 0 }}>
                            <CustomButton title='CHECKOUT' bgColor={'green'} txtColor={'#FFF'} onPress={() => {
                                if (addressData.length) {
                                    console.log(addressData)
                                    navigation.navigate('CheckOut')
                                } else {
                                    Alert.alert('Please Add Address')
                                }
                            }} />
                        </View>
                    </>
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24, fontWeight: '400'}}>Your Cart is Empty</Text>
                    </View>
                )
            }
        </View>
    )
}

export default Cart