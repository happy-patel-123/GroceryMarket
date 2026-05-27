import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{
            // height: 70, 
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingTop: 32,
            paddingBottom: 16,
            backgroundColor: '#FFF',
        }}>
            <Text style={{ fontSize: 25, fontWeight: '600'}}>
                GroceryApp
            </Text>
            <Text>Mode</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})