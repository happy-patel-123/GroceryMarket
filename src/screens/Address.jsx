import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { localAssets } from '../assets/Assets'
import { removeAddress } from '../redux/actions/Actions'

const Address = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const addressData = useSelector(state => state.addressReducer.addressItems)

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{ fontSize: 24, fontWeight: '600' }}>Address</Text>
                <TouchableOpacity 
                    style={styles.addAddress}
                    onPress={() => {
                        navigation.navigate('AddAddress')
                    }}
                >
                    <Text style={styles.addAddressTxt}>Add Address</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={addressData}
                contentContainerStyle={{ marginTop: 16, gap: 8}}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.addressBox}>
                            <View>
                                <Text>{'City: '}{item.city}</Text>
                                <Text>{'Building: '}{item.building}</Text>
                                <Text>{'Pincode: '}{item.pincode}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                dispatch(removeAddress(index))
                            }}>
                                <Image source={localAssets.bin} style={{ height: 24, width: 24 }}/>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 32,
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    addAddress: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 20
    },
    addAddressTxt: {
        fontSize: 16,
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
    }
})