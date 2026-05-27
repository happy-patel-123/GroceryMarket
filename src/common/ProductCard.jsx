import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductCard = ({ item }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.cardImg}/>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <View style={styles.cardPriceContainer}>
                <Text style={styles.price}>{'₹'}{' '}{item.price}</Text>
                <TouchableOpacity style={styles.addToCartView}>
                    <Text style={styles.addToCart}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.heartContainer}>
                <Image source={require('../images/heart.png')} style={{ width: 24, height: 24 }}/>
            </TouchableOpacity>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    cardContainer: {
        width: 200, 
        height: 250,
        borderRadius: 20,
        backgroundColor: '#FFF',
        marginLeft: 16,
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