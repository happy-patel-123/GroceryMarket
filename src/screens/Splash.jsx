import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            checkLogin()
        }, 3000)
    }, [])

    const checkLogin = async () => {
        try {
            const user = await AsyncStorage.getItem('user');

            if (user) {
                navigation.replace('Home');
            } else {
                navigation.replace('Login');
            }

        } catch (error) {
            console.log(error);
            navigation.replace('Login');
        }
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../images/splash.png')} 
                style={{ width: 250, height: 250 }}
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})