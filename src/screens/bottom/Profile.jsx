import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { localAssets } from '../../assets/Assets'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')

    useEffect(() => {
        getName()
    }, [])

    const getName = async () => {
        const userInfo = await AsyncStorage.getItem('user')
        const parsedUserInfo = JSON.parse(userInfo)
        // console.log(parsedUserInfo)
        setName(parsedUserInfo.name)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={{ fontSize: 24, fontWeight: '600'}}>Profile</Text>
                <Image source={localAssets.settings} style={{height: 24, width: 24}}/>
            </View>
            <Image source={localAssets.dummy_user} style={{ height: 150, width: 150, alignSelf: 'center', marginVertical: 16 }} />
            <Text style={{ alignSelf: 'center', fontSize: 24, fontWeight: '400', marginVertical: 8}}>{name}</Text>
            <View>
                <View style={styles.seperator} />
                <Text 
                    style={styles.infoText}
                    onPress={() => {
                        navigation.navigate('Address')
                    }}
                >
                    Address
                </Text>
                <View style={styles.seperator} />
                <Text 
                    style={styles.infoText} 
                    onPress={() => {
                        navigation.navigate('MyOrders')
                    }}
                >
                    Orders
                </Text>
                <View style={styles.seperator} />
                <Text style={styles.infoText}>Offers</Text>
                <View style={styles.seperator} />
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 32,
        marginBottom: 60,
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    infoText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#1520A6',
    },
    seperator: {
        borderBottomWidth: 1,
        marginVertical: 8,
        borderBottomColor: '#1022e7',
    }
})