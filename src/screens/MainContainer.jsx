import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator'
import { store } from '../redux/store/store'
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainContainer = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView style={{ flex: 1 }}>
                <AppNavigator />
            </SafeAreaView>
        </Provider>
    )
}

export default MainContainer