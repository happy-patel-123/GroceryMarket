import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { localAssets } from '../assets/Assets'
import CustomButton from '../common/CustomButton'

const SuccessPayment = () => {
    const route = useRoute()
    const navigation = useNavigation()
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image 
                source={
                    route?.params?.paymentStatus == 'success' 
                        ? localAssets.success 
                        : localAssets.failed
                }
                style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 16 }}>
                {route?.params?.paymentStatus == 'success' ? 'Payemnt Successful' : 'Payemnt Failed'}
            </Text>
            <CustomButton 
                bgColor={route?.params?.paymentStatus == 'success' ? 'green' : 'red'} 
                title={'RETURN HOME'} 
                txtColor={'#FFF'} 
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    )
}

export default SuccessPayment

const styles = StyleSheet.create({})