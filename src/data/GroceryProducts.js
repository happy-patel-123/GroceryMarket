import { localAssets } from "../assets/Assets";

export const groceryProducts = {
    category: [
        {
            category: 'Vegetables',
            data: [
                {
                    name: 'Tomato',
                    price: 40,
                    unit: '1 kg',
                    image: localAssets.tomato,
                },
                {
                    name: 'Potato',
                    price: 30,
                    unit: '1 kg',
                    image: localAssets.potato,
                },
                {
                    name: 'Onion',
                    price: 35,
                    unit: '1 kg',
                    image: localAssets.onion,
                },
                {
                    name: 'Carrot',
                    price: 50,
                    unit: '1 kg',
                    image: localAssets.carrot,
                },
            ],
        },

        {
            category: 'Fruits',
            data: [
                {
                    name: 'Apple',
                    price: 120,
                    unit: '1 kg',
                    // image: require('./images/apple.png'),
                    image: localAssets.tomato,
                },
                {
                    name: 'Banana',
                    price: 60,
                    unit: '1 dozen',
                    // image: require('./images/banana.png'),
                    image: localAssets.potato,
                },
                {
                    name: 'Orange',
                    price: 90,
                    unit: '1 kg',
                    // image: require('./images/orange.png'),
                    image: localAssets.onion,
                },
                {
                    name: 'Mango',
                    price: 150,
                    unit: '1 kg',
                    // image: require('./images/mango.png'),
                    image: localAssets.carrot,
                },
            ],
        },

        {
            category: 'Dairy',
            data: [
                {
                    name: 'Milk',
                    price: 30,
                    unit: '500 ml',
                    // image: require('./images/milk.png'),
                    image: localAssets.tomato,
                },
                {
                    name: 'Cheese',
                    price: 120,
                    unit: '200 g',
                    // image: require('./images/cheese.png'),
                    image: localAssets.potato,
                },
                {
                    name: 'Butter',
                    price: 60,
                    unit: '100 g',
                    // image: require('./images/butter.png'),
                    image: localAssets.onion,
                },
                {
                    name: 'Yogurt',
                    price: 40,
                    unit: '400 g',
                    // image: require('./images/yogurt.png'),
                    image: localAssets.carrot,
                },
            ],
        },

        {
            category: 'Snacks',
            data: [
                {
                    name: 'Potato Chips',
                    price: 20,
                    unit: '1 pack',
                    // image: require('./images/chips.png'),
                    image: localAssets.tomato,
                },
                {
                    name: 'Biscuits',
                    price: 25,
                    unit: '1 pack',
                    // image: require('./images/biscuits.png'),
                    image: localAssets.potato,
                },
                {
                    name: 'Popcorn',
                    price: 50,
                    unit: '1 pack',
                    // image: require('./images/popcorn.png'),
                    image: localAssets.onion,
                },
                {
                    name: 'Chocolate',
                    price: 80,
                    unit: '1 bar',
                    // image: require('./images/chocolate.png'),
                    image: localAssets.carrot,
                },
            ],
        },
    ],
};