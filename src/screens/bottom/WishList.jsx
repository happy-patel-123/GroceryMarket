import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromWishList } from '../../redux/actions/Actions';
import { localAssets } from '../../assets/Assets';

const WishList = () => {
    const dispatch = useDispatch()
    const wishListData = useSelector(state => state.wishListReducer.wishListItems)

    return (
        <View style={{ flex: 1, marginTop: 32, marginBottom: 60 }}>
            {wishListData.length ?
                <FlatList
                    data={wishListData}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.cardContainer}>
                                <Image source={item.image} style={styles.cardImg} />
                                <Text style={styles.cardTitle}>{item.name}</Text>
                                <View style={styles.cardPriceContainer}>
                                    <Text style={styles.price}>{'₹'}{' '}{item.price}</Text>
                                    <TouchableOpacity style={styles.addToCartView} onPress={() => {
                                        dispatch(addToCart(item))
                                    }}>
                                        <Text style={styles.addToCart}>Add to Cart</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.heartContainer} onPress={() => {
                                    dispatch(removeFromWishList(index))
                                }}>
                                    <Image source={localAssets.heart_fill} style={{ width: 24, height: 24, tintColor: 'red' }} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                /> :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: '400' }}>Your WishList is Empty</Text>
                </View>
            }
        </View>
    )
}

export default WishList

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: 250,
        borderRadius: 20,
        backgroundColor: '#FFF',
        marginLeft: 16,
        marginBottom: 16
    },
    cardImg: {
        width: '100%',
        height: '65%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 16,
        marginTop: 8
    },
    cardPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
        marginHorizontal: 16
    },
    addToCartView: {
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },
    addToCart: {
        fontSize: 16,
        fontWeight: '400',
        color: '#000'
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 40,
        width: 40,
        padding: 4,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        elevation: 5
    }
})