import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const navigation = useNavigation()

    const handleLogout = async () => {

        try {
            await AsyncStorage.removeItem('user');
            navigation.replace('Login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>
            <Button 
                title='LOGOUT'
                onPress={handleLogout}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})