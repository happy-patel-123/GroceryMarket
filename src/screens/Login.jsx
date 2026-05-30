import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'
import { Formik } from 'formik'
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { localAssets } from '../assets/Assets'

const Login = () => {
    const navigation = useNavigation();
    const [passwordShow, setPasswordShow] = useState(false)

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Please Enter Correct Email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    })

    const login = ({ email, password }) =>
        new Promise(async (resolve, reject) => {

            setTimeout(async () => {

                const storedUser = await AsyncStorage.getItem('user');
                if (!storedUser) {
                    return reject(new Error("User doesn't exist, please sign up"));
                }

                const parsedUser = JSON.parse(storedUser);
                if (parsedUser.email !== email || parsedUser.password !== password) {
                    return reject(new Error("Invalid email or password"));
                }

                resolve(true);
            }, 5000);
    });


    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
            <Image 
                style={styles.splashImg}
                source={localAssets.splash} 
            />
            <Text style={styles.headerTxt}>Login</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => 
                    login({ email: values.email, password: values.password })
                        .then(() => {
                            // Alert.alert('User Logged Succesfully.');
                            navigation.replace('Home');
                            actions.resetForm();
                        })
                        .catch(error => {
                            actions.setFieldError('general', error.message);
                        })
                        .finally(() => {
                            actions.setSubmitting(false);
                        })
                }
            >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, resetForm }) => {
                    return (
                        <>
                            <CustomInput 
                                icon={localAssets.email}
                                placeholder={'Enter Email'}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur("email")} // Exactly don't know the use
                            />
                            {
                                touched.email && errors.email 
                                    ? <Text style={styles.errorTxt}>{errors.email}</Text> 
                                    : <></>
                            }
                            <CustomInput 
                                icon={localAssets.password}
                                placeholder={'Enter Password'}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur("password")}
                                type={passwordShow ? 'default' : 'password'}
                                rightIcon={passwordShow ? localAssets.show : localAssets.hide}
                                onPressRightIcon={() => {
                                    setPasswordShow(!passwordShow)
                                }}
                            />
                            {
                                touched.password && errors.password
                                    ? <Text style={styles.errorTxt}>{errors.password}</Text> 
                                    : <></>
                            }
                            {
                                isSubmitting 
                                    ? <ActivityIndicator style={{ marginTop: 45 }} size='large' />
                                    : <CustomButton  
                                        title={'Login'} 
                                        bgColor={'green'} 
                                        txtColor={'#FFF'} 
                                        onPress={handleSubmit}
                                    />
                            }
                            {
                                errors.general
                                    ? <Text style={[styles.errorTxt, { alignSelf: 'center', marginLeft: 0 }]}>{errors.general}</Text> 
                                    : <></>
                            }
                            <Text 
                                style={styles.createAccountTxt}
                                onPress={() => {
                                    navigation.navigate('SignUp')
                                    setTimeout(() => {
                                        resetForm()
                                    }, 2000);
                                }}
                            >
                                Create New Account
                            </Text>
                        </>
                    )
                }}
            </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
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