import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ icon, placeholder, value, onChangeText, type }) => {
    return (
        <View style={{
            height: 50,
            width: '85%',
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 8,
            marginTop: 32,
            paddingHorizontal: 8,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Image source={icon} style={{ width: 32, height: 32, tintColor: '#808080', marginRight: 4 }}/>
            <TextInput 
                placeholder={placeholder}
                secureTextEntry={type === 'password' ? true : false}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default CustomInput