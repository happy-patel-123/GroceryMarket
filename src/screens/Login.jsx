import { ActivityIndicator, Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'
import { Formik } from 'formik'
import * as Yup from 'yup';

const Login = () => {
    const navigation = useNavigation();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Please Enter Correct Email')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required')
    })

    // Acting as a server-side verification
    const login = ({ email, password }) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'test@test.com') {
                    reject(new Error("Duplicate email,please try again."));
                }
                resolve(true);
            }, 5000);
    });


    return (
        <View style={{ flex: 1 }}>
            <Image 
                style={styles.splashImg}
                source={require('../images/splash.png')} 
            />
            <Text style={styles.headerTxt}>Login</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => 
                    login({ email: values.email, password: values.password })
                        .then(() => {
                            Alert.alert('User Logged Succesfully.');
                        })
                        .catch(error => {
                            actions.setFieldError('general', error.message);
                        })
                        .finally(() => {
                            actions.setSubmitting(false);
                            actions.resetForm();
                        })
                }
            >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, resetForm }) => {
                    return (
                        <>
                            <CustomInput 
                                icon={require('../images/email.png')}
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
                                icon={require('../images/password.png')}
                                placeholder={'Enter Password'}
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur("password")}
                                type={'password'}
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