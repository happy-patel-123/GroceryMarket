import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { localAssets } from '../assets/Assets'
import CustomButton from '../common/CustomButton'
import CustomInput from '../common/CustomInput'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { addAddress } from '../redux/actions/Actions'

const AddAddress = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const validationSchema = Yup.object({
        city: Yup.string()
            .min(3, 'City Name must be atleast 3 letters')
            .required('City Name is required'),
        building: Yup.string()
            .min(3, 'Building Name must be atleast 3 letters')
            .required('Building Name is required'),
        pincode: Yup.string()
            .required('Pincode is required')
            .matches(/^[0-9]+$/, 'Must be only digits')
            .length(6, 'Pincode must be exactly 6 digits')
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }}>
                <Image source={localAssets.back} style={{ height: 24, width: 24 }} />
            </TouchableOpacity>

            <Formik
                initialValues={{ city: '', building: '', pincode: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    dispatch(addAddress(values))
                    navigation.goBack()
                    actions.resetForm()
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => {
                    return (
                        <>
                            <CustomInput
                                icon={localAssets.city}
                                placeholder={'Enter City Name'}
                                value={values.city}
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur("city")}
                            />
                            {
                                touched.city && errors.city
                                    ? <Text style={styles.errorTxt}>{errors.city}</Text>
                                    : <></>
                            }
                            <CustomInput
                                icon={localAssets.building}
                                placeholder={'Enter Buiding'}
                                value={values.building}
                                onChangeText={handleChange('building')}
                                onBlur={handleBlur("building")}
                            />
                            {
                                touched.building && errors.building
                                    ? <Text style={styles.errorTxt}>{errors.building}</Text>
                                    : <></>
                            }
                            <CustomInput
                                icon={localAssets.pin}
                                placeholder={'Enter Pincode'}
                                keyboardtype={'number-pad'}
                                value={values.pincode}
                                onChangeText={handleChange('pincode')}
                                onBlur={handleBlur("pincode")}
                            />
                            {
                                touched.pincode && errors.pincode
                                    ? <Text style={styles.errorTxt}>{errors.pincode}</Text>
                                    : <></>
                            }
                            <CustomButton
                                title={'Save Address'}
                                bgColor={'#000'}
                                txtColor={'#FFF'}
                                onPress={handleSubmit}
                            />
                        </>
                    )
                }}
            </Formik>
        </View>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 32,
    },
    errorTxt: {
        fontSize: 14, 
        fontWeight: '400', 
        color: 'red', 
        marginLeft: 30, 
        marginTop: 4
    }
})