import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MyOrders = () => {

    const orderData = useSelector(
        state => state.ordersReducer.orderItems
    )

    return (

        <View style={styles.container}>

            <FlatList
                data={orderData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.orderCard}>
                            <Text style={styles.orderTitle}>
                                Order #{index + 1}
                            </Text>
                            <FlatList
                                data={item.cartItemsData}
                                scrollEnabled={false}
                                contentContainerStyle={styles.itemsContainer}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={styles.productCard}>
                                            <Image
                                                source={item.image}
                                                style={styles.productImage}
                                            />
                                            <View style={styles.productInfo}>
                                                <Text
                                                    numberOfLines={1}
                                                    style={styles.productName}
                                                >
                                                    {item.name}
                                                </Text>
                                                <Text style={styles.productPrice}>
                                                    ₹ {item.price}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                                }}
                            />

                            <View style={styles.divider} />

                            <Text style={styles.totalPrice}>
                                Total: ₹ {item.totalPrice}
                            </Text>

                            <Text style={styles.addressText}>
                                Address:
                                {' '}
                                {item.address.building},
                                {' '}
                                {item.address.city}
                                {' - '}
                                {item.address.pincode}
                            </Text>

                        </View>
                    )
                }}
            />

        </View>

    )
}

export default MyOrders

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    listContainer: {
        padding: 16,
        paddingBottom: 32,
    },

    orderCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
        elevation: 4,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    orderTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginBottom: 18,
    },

    itemsContainer: {
        gap: 14,
    },

    productCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    productImage: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginRight: 14,
        resizeMode: 'contain',
        backgroundColor: '#F3F3F3',
    },

    productInfo: {
        flex: 1,
    },

    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
        marginBottom: 6,
    },

    productPrice: {
        fontSize: 15,
        fontWeight: '700',
        color: '#2E7D32',
    },

    divider: {
        height: 1,
        backgroundColor: '#E5E5E5',
        marginVertical: 16,
    },

    totalPrice: {
        fontSize: 17,
        fontWeight: '700',
        color: '#000',
        marginBottom: 8,
    },

    addressText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 22,
    },

})