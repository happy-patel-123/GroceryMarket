import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../common/CustomButton'
import RazorpayCheckout from 'react-native-razorpay';
import { addOrders } from '../redux/actions/Actions'

const CheckOut = () => {
    const navigation = useNavigation()

    const [selectAddress, setSelectAddress] = useState({
        city: '',
        building: '',
        pincode: ''
    })

    const dispatch = useDispatch()
    const cartData = useSelector(state => state.cartReducer.cartItems)
    const addressData = useSelector(state => state.addressReducer.addressItems)

    const getCartTotal = () => {
        let totalPrice = 0;
        cartData.map((item) => {
            totalPrice = totalPrice + item.price;
        })
        return totalPrice
    }
    
    return (
        <View style={{ marginTop: 32, flex: 1 }}>
            <View style={{ marginHorizontal: 16 }}>
                <FlatList
                    data={cartData}
                    contentContainerStyle={{ gap: 16 }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={item.image} style={{ width: 75, height: 75, marginRight: 16 }}/>
                                <View>
                                    <Text>{item.name}</Text>
                                    <Text>{'₹'}{' '}{item.price}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>{getCartTotal()}</Text>
            </View>
            <View style={{ margin: 16 }}>
                <FlatList 
                data={addressData}
                contentContainerStyle={{ gap: 8}}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.addressBox}>
                            <View>
                                <Text>{'City: '}{item.city}</Text>
                                <Text>{'Building: '}{item.building}</Text>
                                <Text>{'Pincode: '}{item.pincode}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                setSelectAddress(item)
                            }}>
                                <Text style={{ fontSize: 16 }}>Select Address</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
            </View>
            {
                selectAddress.city !== '' ? (
                    <>
                        <View style={{ height: 1, backgroundColor: '#000', marginHorizontal: 16, marginBottom: 16 }} />
                        <View style={styles.selectAddressBox}>
                            <View>
                                <Text>{'City: '}{selectAddress.city}</Text>
                                <Text>{'Building: '}{selectAddress.building}</Text>
                                <Text>{'Pincode: '}{selectAddress.pincode}</Text>
                            </View>
                        </View></>
                ) : <></>
            }
            <View style={{ position: 'absolute', bottom: 50, width: '100%'}}>
                <CustomButton bgColor={'green'} txtColor={'#FFF'} title={'PLACE ORDER'} onPress={() => {
                    if (selectAddress.building) {
                        var options = {
                            description: 'ECommerce SuperMarket',
                            image: 'https://i.imgur.com/3g7nmJC.jpg',
                            currency: 'INR',
                            key: 'rzp_test_SvBZfa2pHp2Jbx',
                            amount: '' + parseInt(getCartTotal() * 100) + '',
                            name: 'Happy Testing',
                            order_id: '',//Replace this with an order_id created using Orders API.
                            prefill: {
                                email: 'demo.happy@example.com',
                                contact: '+919723617964',
                                name: 'Happy Patel'
                            },
                            theme: { color: '#53a20e' }
                        }
                        RazorpayCheckout.open(options).then((data) => {
                            // handle success
                            // alert(`Success: ${data.razorpay_payment_id}`);
                            console.log(`Success: ${data.razorpay_payment_id}`);

                            dispatch(addOrders({
                                cartItemsData: cartData,
                                totalPrice: getCartTotal(),
                                address: selectAddress
                            }))

                            navigation.navigate('SuccessPayment', {
                                paymentStatus: 'success'
                            })
                        }).catch((error) => {
                            // handle failure
                            console.log(`Error: ${error.code} | ${error.description}`);
                            // alert(`Error: ${error.code} | ${error.description}`);
                            navigation.navigate('SuccessPayment', {
                                paymentStatus: 'failed'
                            })
                        });
                    } else {
                        Alert.alert('Please Select Address')
                    }
                }} />
            </View>
        </View>
    )
}

export default CheckOut

const styles = StyleSheet.create({
    totalContainer: {
        flexDirection: 'row', 
        marginHorizontal: 16, 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTopWidth: 1,
        marginTop: 16,  
    },
    totalText: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 8
    },
    addressBox: {
        flex: 1, 
        justifyContent: 'space-between', 
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    selectAddressBox: {
        // flex: 1, 
        marginHorizontal: 16,
        justifyContent: 'space-between', 
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
})