import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const Login = () => {

    const navigation = useNavigation();

    return (
        <View   >
            <Image 
                style={styles.splashImg}
                source={require('../images/splash.png')} 
            />
            <Text style={styles.headerTxt}>Login</Text>
            <CustomInput 
                icon={require('../images/email.png')}
                placeholder={'Enter Email'}
                // value={value}
                // onChangeText={onChangeText}
            />
            <CustomInput 
                icon={require('../images/password.png')} 
                placeholder={'Enter Password'}
                // value={value}
                // onChangeText={onChangeText}
                type={'password'}
            />
            <CustomButton  
                title={'Login'} 
                bgColor={'green'} 
                txtColor={'#FFF'} 
                onPress={() => {}}
            />
            <Text 
                style={styles.createAccountTxt}
                onPress={() => {
                    navigation.navigate('SignUp')
                }}
            >
                Create New Account
            </Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    splashImg: {
        width: 150, 
        height: 150, 
        alignSelf: 'center',
        marginTop: 50
    },
    headerTxt: {
        fontSize: 32,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 32
    },
    createAccountTxt: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
        alignSelf: 'center'
    }
})