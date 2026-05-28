import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Main from '../screens/bottom/Main'
import Search from '../screens/bottom/Search'
import Cart from '../screens/bottom/Cart'
import WishList from '../screens/bottom/WishList'
import Profile from '../screens/bottom/Profile'
import { localAssets } from "../assets/Assets"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux'

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(0)

    // const handleLogout = async () => {

    //     try {
    //         await AsyncStorage.removeItem('user');
    //         navigation.replace('Login');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const cartData = useSelector(state => state.cartReducer)
    const wishListData = useSelector(state => state.wishListReducer)

    return (
        <View style={{ flex: 1 }}>
            {
                selectedTab == 0 
                    ? <Main />
                    : selectedTab == 1 
                        ? <Search />
                        : selectedTab == 2 
                            ? <Cart />
                            : selectedTab == 3 
                                ? <WishList />
                                : <Profile />
            }
            <View style={styles.container}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(0)}>
                    <Image 
                        source={localAssets.home} 
                        style={{ height: 30, width: 30, tintColor: selectedTab == 0 ? '#000': '#8e8e8e' }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(1)}>
                    <Image 
                        source={localAssets.search}
                        style={{ height: 30, width: 30, tintColor: selectedTab == 1 ? '#000': '#8e8e8e' }}
                    />
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity 
                        style={{ 
                            width: 60, 
                            height: 60, 
                            backgroundColor: selectedTab == 2 ? 'green' : '#000', 
                            borderRadius: 30, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            marginBottom: 40
                        }}
                        onPress={() => setSelectedTab(2)}
                    >
                        <Image source={localAssets.bag} style={{ height: 30, width: 30, tintColor: '#FFF' }}/>
                    </TouchableOpacity>
                    <View style={styles.counterContainer}>
                        <Text style={styles.counter}>{cartData.cartItems.length}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(3)}>
                    <Image 
                        source={localAssets.heart} 
                        style={{ height: 30, width: 30, tintColor: selectedTab == 3 ? '#000': '#8e8e8e' }}
                    />
                    <View style={[styles.counterContainer, { top: 8, right: 15 }]}>
                        <Text style={styles.counter}>{wishListData.wishListItems.length}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setSelectedTab(4)}>
                    <Image 
                        source={localAssets.user} 
                        style={{ height: 30, width: 30, tintColor: selectedTab == 4 ? '#000': '#8e8e8e' }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: { 
        position: 'absolute', 
        bottom: 0, 
        height: 60,
        width: '100%', 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconContainer: {
        height: '100%', 
        width: '20%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterContainer: {
        width: 20, 
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        top: -15,
        right: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    counter: {
        color: '#FFF',
        fontWeight: '600'
    }
})