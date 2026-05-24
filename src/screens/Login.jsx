import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [password, setPassword] = useState('')
    const [badPassword, setBadPassword] = useState(false)

    const validate = () => {
        if (email == '') {
            setBadEmail(true)
        } else {
            setBadEmail(false)
        }
        if (password == '') {
            setBadPassword(true)
        } else {
            setBadPassword(false)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Image 
                style={styles.splashImg}
                source={require('../images/splash.png')} 
            />
            <Text style={styles.headerTxt}>Login</Text>
            <CustomInput 
                icon={require('../images/email.png')}
                placeholder={'Enter Email'}
                value={email}
                onChangeText={(txt) => {
                    setEmail(txt)
                }}
            />
            {
                badEmail 
                    ? <Text style={styles.errorTxt}>Please Enter Email</Text> 
                    : <></>
            }
            <CustomInput 
                icon={require('../images/password.png')} 
                placeholder={'Enter Password'}
                value={password}
                onChangeText={(txt) => {
                    setPassword(txt)
                }}
                type={'password'}
            />
            {
                badPassword
                    ? <Text style={styles.errorTxt}>Please Enter Password</Text> 
                    : <></>
            }
            <CustomButton  
                title={'Login'} 
                bgColor={'green'} 
                txtColor={'#FFF'} 
                onPress={validate}
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
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },
    errorTxt: {
        fontSize: 14, 
        fontWeight: '400', 
        color: 'red', 
        marginLeft: 30, 
        marginTop: 4
    }
})