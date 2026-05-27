import { View, Text, StatusBar, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import { groceryProducts } from '../../data/GroceryProducts'
import ProductCard from '../../common/ProductCard'
import { localAssets } from '../../assets/Assets'

const Main = () => {
    const [groceryCategory, setGroceryCategory] = useState([])
    const [vegetableList, setVegetableList] = useState([])
    const [fruitList, setFruitList] = useState([])
    const [dairyList, setDairyList] = useState([])
    const [snackList, setSnackList] = useState([])

    useEffect(() => {
        const tempCategory = []
        // console.log(groceryProducts)
        groceryProducts.category.map(item => {
            tempCategory.push(item.category)
        })
        // console.log(tempCategory)
        setGroceryCategory(tempCategory)

        setVegetableList(groceryProducts.category[0].data)
        setFruitList(groceryProducts.category[1].data)
        setDairyList(groceryProducts.category[2].data)
        setSnackList(groceryProducts.category[3].data)
    }, [])

    return (
        <ScrollView style={{ flex: 1, marginBottom: 60 }}>
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'dark-content'}/>
                <Header />
                <Image source={localAssets.banner} style={{ height: 200, width: '94%', alignSelf: 'center', marginTop: 8 }}/>
                
                <View style={{ marginTop: 16, marginRight: 16 }}>
                    <FlatList 
                        data={groceryCategory}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index}) => {
                            return (
                                <TouchableOpacity style={{ borderWidth: 1, paddingHorizontal: 16, paddingVertical: 8, marginLeft: 16, borderRadius: 20}}>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#000' }}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000', marginLeft: 16, marginVertical: 16 }}>Vegetables</Text>
                <FlatList 
                    data={vegetableList}
                    contentContainerStyle={{ paddingRight: 16 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                        return (
                            <ProductCard item={item} />
                        )
                    }}
                />
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000', marginLeft: 16, marginVertical: 16 }}>Fruits</Text>
                <FlatList 
                    data={fruitList}
                    contentContainerStyle={{ paddingRight: 16 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                        return (
                            <ProductCard item={item} />
                        )
                    }}
                />
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000', marginLeft: 16, marginVertical: 16 }}>Dairy</Text>
                <FlatList 
                    data={dairyList}
                    contentContainerStyle={{ paddingRight: 16 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => {
                        return (
                            <ProductCard item={item} />
                        )
                    }}
                />
                <Text style={{ fontSize: 20, fontWeight: '600', color: '#000', marginLeft: 16, marginVertical: 16 }}>Snacks</Text>
                <FlatList 
                    data={snackList}
                    contentContainerStyle={{ paddingRight: 16, paddingBottom: 16}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index}) => {
                        return (
                            <ProductCard item={item} />
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default Main