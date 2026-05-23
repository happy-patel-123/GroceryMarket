import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, onPress, txtColor, bgColor, }) => {
    return (
        <TouchableOpacity style={{
            width: '85%',
            height: 50,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: bgColor,
            marginTop: 50
        }} onPress={onPress}
        >
            <Text style={{
                color: txtColor,
                fontSize: 25,
                fontWeight: '600',
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton
