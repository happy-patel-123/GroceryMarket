import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const SignUp = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [badName, setBadName] = useState(false)
    const [email, setEmail] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [number, setNumber] = useState('')
    const [badNumber, setBadNumber] = useState(false)
    const [password, setPassword] = useState('')
    const [badPassword, setBadPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [badConfirmPassword, setBadConfirmPassword] = useState(false)

    const validate = () => {
        if (name == '') {
            setBadName(true)
        } else {
            setBadName(false)
        }
        if (email == '') {
            setBadEmail(true)
        } else {
            setBadEmail(false)
        }
        if (number == '') {
            setBadNumber(true)
        } else if (number.length < 10){
            setBadNumber(true)
        } else {
            setBadNumber(false)
        }
        if (password == '') {
            setBadPassword(true)
        } else {
            setBadPassword(false)
        }
        if (confirmPassword == '' || password !== confirmPassword) {
            setBadConfirmPassword(true)
        } else {
            setBadConfirmPassword(false)
        }
    }

    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <Image 
                style={styles.splashImg}
                source={require('../images/splash.png')} 
            />
            <Text style={styles.headerTxt}>Sign Up</Text>
            <CustomInput 
                icon={require('../images/user.png')}
                placeholder={'Enter Name'}
                value={name}
                onChangeText={(txt) => {
                    setName(txt)
                }}
            />
            {
                badName
                    ? <Text style={styles.errorTxt}>Please Enter Name</Text>
                    : <></>
            }
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
                icon={require('../images/phone.png')}
                placeholder={'Enter Mobile Number'}
                keyboardtype={'number-pad'}
                value={number}
                onChangeText={(txt) => {
                    setNumber(txt)
                }}
            />
            {
                badNumber
                    ? <Text style={styles.errorTxt}>Please Enter Proper Number</Text>
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
            <CustomInput 
                icon={require('../images/password.png')} 
                placeholder={'Confirm Password'}
                value={confirmPassword}
                onChangeText={(txt) => {
                    setConfirmPassword(txt)
                }}
            />
            {
                badConfirmPassword
                    ? <Text style={styles.errorTxt}>Please Enter Correct Password</Text>
                    : <></>
            }
            <CustomButton
                title={'SignUp'} 
                bgColor={'green'} 
                txtColor={'#FFF'} 
                onPress={validate}
            />
            <Text 
                style={styles.createAccountTxt}
                onPress={() => {
                    navigation.goBack()
                }}
            >
                Already Have Account ?
            </Text>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    splashImg: {
        width: 150, 
        height: 150, 
        alignSelf: 'center',
        marginTop: 20
    },
    headerTxt: {
        fontSize: 32,
        fontWeight: '600',
        alignSelf: 'center',
        marginTop: 16
    },
    createAccountTxt: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        marginBottom: 100
    },
    errorTxt: {
        fontSize: 14, 
        fontWeight: '400', 
        color: 'red', 
        marginLeft: 30, 
        marginTop: 4
    }
})