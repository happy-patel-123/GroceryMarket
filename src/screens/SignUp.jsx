import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'
import { Formik } from 'formik'
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
    const navigation = useNavigation();

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be atleast 3 letters")
            .required('Name is required'),
        email: Yup.string()
            .email()
            .required('Eamil is required'),
        number: Yup.number()
            .min(10, "Number must be atleast 10 digits")
            .required('Number is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            // Needs to be ONE OF the value inside array: ref of 'password' or null.
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    })

    // Acting as a server-side verification
    const signup = ({ email, password, name }) =>
        new Promise(async (resolve, reject) => {
            setTimeout(async () => {
                if (email === 'test@test.com') {
                    reject(new Error("Duplicate email, please try again."));
                }
                await saveData(email, password, name)
                resolve(true);
            }, 5000);
    });

    const saveData = async (email, password, name) => {
        const userData = { email, password, name}
        console.log(userData)
        await AsyncStorage.setItem('user', JSON.stringify(userData));
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
            <Formik
                initialValues={{ name: '', email: '', number: '', password: '', confirmPassword: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => 
                    signup({ email: values.email, password: values.password, name: values.name })
                        .then(() => {
                            Alert.alert('User Registered Succesfully.');
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
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isSubmitting, resetForm  }) => {
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
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur("name")}
                            />
                            {
                                touched.name && errors.name
                                    ? <Text style={styles.errorTxt}>{errors.name}</Text>
                                    : <></>
                            }
                            <CustomInput 
                                icon={require('../images/email.png')}
                                placeholder={'Enter Email'}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur("email")}
                            />
                            {
                                touched.email && errors.email
                                    ? <Text style={styles.errorTxt}>{errors.email}</Text>
                                    : <></>
                            }
                            <CustomInput 
                                icon={require('../images/phone.png')}
                                placeholder={'Enter Mobile Number'}
                                keyboardtype={'number-pad'}
                                value={values.number}
                                onChangeText={handleChange('number')}
                                onBlur={handleBlur("number")}
                            />
                            {
                                touched.number && errors.number
                                    ? <Text style={styles.errorTxt}>{errors.number}</Text>
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
                            <CustomInput 
                                icon={require('../images/password.png')} 
                                placeholder={'Confirm Password'}
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur("confirmPassword")}
                            />
                            {
                                touched.confirmPassword && errors.confirmPassword
                                    ? <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
                                    : <></>
                            }
                            {
                                isSubmitting 
                                    ? <ActivityIndicator style={{ marginTop: 45 }} size='large' />
                                    : <CustomButton
                                        title={'SignUp'}
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
                                    navigation.goBack()
                                    setTimeout(() => {
                                        resetForm()
                                    }, 2000);
                                }}
                            >
                                Already Have Account ?
                            </Text>
                        </ScrollView>
                        )
                    }
                }
            </Formik>
        </KeyboardAvoidingView>
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