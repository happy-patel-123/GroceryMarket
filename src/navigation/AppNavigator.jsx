import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Login'
import Splash from '../screens/Splash'
import SignUp from '../screens/SignUp'

const AppNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false}} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
                <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator