import React from 'react'
import { Provider } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator'
import { store } from '../redux/store/store'
import { StatusBar } from 'react-native';

const MainContainer = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle={'dark-content'} />
            <AppNavigator />
        </Provider>
    )
}

export default MainContainer