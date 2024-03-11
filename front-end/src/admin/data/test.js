export const lastOrders = [
    {
        "id": 22,
        "firstName": "Pattie",
        "lastName": "Jakubowski",
        "timestamp": 15,
        "total": "687.00",
        "amountProducts": 14
    },
    {
        "id": 80,
        "firstName": "Jany",
        "lastName": "Christiansen",
        "timestamp": 5,
        "total": "782.00",
        "amountProducts": 3
    },
    {
        "id": 13,
        "firstName": "Conrad",
        "lastName": "Dare",
        "timestamp": 11,
        "total": "990.00",
        "amountProducts": 15
    },
    {
        "id": 95,
        "firstName": "Jerome",
        "lastName": "Bernier",
        "timestamp": 13,
        "total": "338.00",
        "amountProducts": 7
    },
    {
        "id": 99,
        "firstName": "Kamren",
        "lastName": "Gerlach",
        "timestamp": 13,
        "total": "72.00",
        "amountProducts": 3
    },
    {
        "id": 92,
        "firstName": "Pedro",
        "lastName": "Figueroa",
        "timestamp": 12,
        "total": "80.00",
        "amountProducts": 4
    }
];

export const products = [
    {
        "id": 26,
        "name": "Chicken",
        "offerType": 0,
        "category": 3,
        "availability": 1,
        "price": "609.00"
    },
    {
        "id": 54,
        "name": "Computer",
        "offerType": 1,
        "category": 1,
        "availability": 1,
        "price": "34.00"
    },
    {
        "id": 65,
        "name": "Gloves",
        "offerType": 0,
        "category": 2,
        "availability": 1,
        "price": "785.00"
    },
    {
        "id": 80,
        "name": "Bacon",
        "offerType": 1,
        "category": 3,
        "availability": 1,
        "price": "248.00"
    },
    {
        "id": 70,
        "name": "Fish",
        "offerType": 1,
        "category": 3,
        "availability": 0,
        "price": "388.00"
    },
    {
        "id": 15,
        "name": "Soap",
        "offerType": 0,
        "category": 1,
        "availability": 1,
        "price": "29.00"
    },
    {
        "id": 29,
        "name": "Chair",
        "offerType": 1,
        "category": 0,
        "availability": 0,
        "price": "177.00"
    },
    {
        "id": 14,
        "name": "Bacon",
        "offerType": 0,
        "category": 0,
        "availability": 0,
        "price": "164.00"
    },
    {
        "id": 99,
        "name": "Computer",
        "offerType": 0,
        "category": 2,
        "availability": 0,
        "price": "187.00"
    },
    {
        "id": 8,
        "name": "Gloves",
        "offerType": 1,
        "category": 1,
        "availability": 0,
        "price": "385.00"
    }
];

export const orders = [
    {
        "id": 11,
        "name": "Theresia",
        "lastName": "Effertz",
        "state": 0,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 67,
                "name": "Towels",
                "offerType": 1,
                "category": 0,
                "availability": 0,
                "amount": 5,
                "price": "46.00"
            },
            {
                "id": 35,
                "name": "Ball",
                "offerType": 0,
                "category": 0,
                "availability": 0,
                "amount": 1,
                "price": "258.00"
            },
            {
                "id": 22,
                "name": "Pants",
                "offerType": 1,
                "category": 0,
                "availability": 1,
                "amount": 7,
                "price": "519.00"
            },
            {
                "id": 3,
                "name": "Chips",
                "offerType": 1,
                "category": 1,
                "availability": 1,
                "amount": 2,
                "price": "869.00"
            },
            {
                "id": 71,
                "name": "Table",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 2,
                "price": "640.00"
            }
        ],
        "total": "399.00"
    },
    {
        "id": 25,
        "name": "Melvina",
        "lastName": "Bogan",
        "state": 5,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 42,
                "name": "Towels",
                "offerType": 1,
                "category": 1,
                "availability": 0,
                "amount": 4,
                "price": "382.00"
            },
            {
                "id": 25,
                "name": "Pizza",
                "offerType": 0,
                "category": 0,
                "availability": 1,
                "amount": 5,
                "price": "753.00"
            }
        ],
        "total": "725.00"
    },
    {
        "id": 12,
        "name": "Alejandrin",
        "lastName": "Kirlin",
        "state": 2,
        "paymentMethod": 1,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 1,
                "name": "Chips",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 8,
                "price": "491.00"
            },
            {
                "id": 60,
                "name": "Car",
                "offerType": 0,
                "category": 1,
                "availability": 1,
                "amount": 3,
                "price": "288.00"
            },
            {
                "id": 50,
                "name": "Towels",
                "offerType": 1,
                "category": 1,
                "availability": 1,
                "amount": 6,
                "price": "140.00"
            },
            {
                "id": 65,
                "name": "Shirt",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 3,
                "price": "209.00"
            }
        ],
        "total": "378.00"
    },
    {
        "id": 88,
        "name": "Rafaela",
        "lastName": "Hettinger",
        "state": 3,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 3,
                "name": "Ball",
                "offerType": 0,
                "category": 0,
                "availability": 0,
                "amount": 7,
                "price": "223.00"
            },
            {
                "id": 23,
                "name": "Fish",
                "offerType": 1,
                "category": 0,
                "availability": 0,
                "amount": 8,
                "price": "394.00"
            },
            {
                "id": 59,
                "name": "Hat",
                "offerType": 0,
                "category": 0,
                "availability": 1,
                "amount": 5,
                "price": "242.00"
            },
            {
                "id": 27,
                "name": "Soap",
                "offerType": 1,
                "category": 1,
                "availability": 1,
                "amount": 2,
                "price": "781.00"
            },
            {
                "id": 31,
                "name": "Gloves",
                "offerType": 0,
                "category": 0,
                "availability": 0,
                "amount": 8,
                "price": "475.00"
            }
        ],
        "total": "410.00"
    },
    {
        "id": 66,
        "name": "Felicita",
        "lastName": "Bartell",
        "state": 1,
        "paymentMethod": 1,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 98,
                "name": "Pants",
                "offerType": 1,
                "category": 1,
                "availability": 0,
                "amount": 2,
                "price": "841.00"
            },
            {
                "id": 3,
                "name": "Hat",
                "offerType": 1,
                "category": 1,
                "availability": 0,
                "amount": 3,
                "price": "890.00"
            },
            {
                "id": 76,
                "name": "Sausages",
                "offerType": 1,
                "category": 0,
                "availability": 0,
                "amount": 6,
                "price": "728.00"
            },
            {
                "id": 76,
                "name": "Tuna",
                "offerType": 0,
                "category": 0,
                "availability": 1,
                "amount": 8,
                "price": "340.00"
            }
        ],
        "total": "96.00"
    },
    {
        "id": 25,
        "name": "Freddie",
        "lastName": "Gibson",
        "state": 4,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 49,
                "name": "Bacon",
                "offerType": 1,
                "category": 1,
                "availability": 1,
                "amount": 5,
                "price": "649.00"
            },
            {
                "id": 44,
                "name": "Bacon",
                "offerType": 1,
                "category": 1,
                "availability": 0,
                "amount": 6,
                "price": "790.00"
            }
        ],
        "total": "384.00"
    },
    {
        "id": 27,
        "name": "Vicente",
        "lastName": "Hoppe",
        "state": 1,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 20,
                "name": "Shirt",
                "offerType": 0,
                "category": 1,
                "availability": 1,
                "amount": 5,
                "price": "821.00"
            },
            {
                "id": 2,
                "name": "Fish",
                "offerType": 0,
                "category": 0,
                "availability": 0,
                "amount": 2,
                "price": "289.00"
            }
        ],
        "total": "884.00"
    },
    {
        "id": 99,
        "name": "Tressie",
        "lastName": "Kutch",
        "state": 3,
        "paymentMethod": 1,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 20,
                "name": "Shoes",
                "offerType": 1,
                "category": 1,
                "availability": 0,
                "amount": 8,
                "price": "275.00"
            },
            {
                "id": 43,
                "name": "Tuna",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 6,
                "price": "453.00"
            },
            {
                "id": 28,
                "name": "Hat",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 2,
                "price": "803.00"
            },
            {
                "id": 35,
                "name": "Pants",
                "offerType": 0,
                "category": 0,
                "availability": 1,
                "amount": 8,
                "price": "818.00"
            }
        ],
        "total": "611.00"
    },
    {
        "id": 9,
        "name": "Nyah",
        "lastName": "Farrell",
        "state": 2,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 27,
                "name": "Shoes",
                "offerType": 0,
                "category": 0,
                "availability": 1,
                "amount": 6,
                "price": "514.00"
            },
            {
                "id": 70,
                "name": "Bacon",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 6,
                "price": "379.00"
            },
            {
                "id": 27,
                "name": "Tuna",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 3,
                "price": "323.00"
            },
            {
                "id": 32,
                "name": "Towels",
                "offerType": 0,
                "category": 0,
                "availability": 0,
                "amount": 8,
                "price": "854.00"
            },
            {
                "id": 99,
                "name": "Shoes",
                "offerType": 0,
                "category": 1,
                "availability": 1,
                "amount": 2,
                "price": "701.00"
            },
            {
                "id": 23,
                "name": "Bike",
                "offerType": 1,
                "category": 1,
                "availability": 1,
                "amount": 4,
                "price": "797.00"
            }
        ],
        "total": "482.00"
    },
    {
        "id": 74,
        "name": "Stephania",
        "lastName": "Hane",
        "state": 4,
        "paymentMethod": 0,
        "date": new Date('2024-03-08'),
        "products": [
            {
                "id": 62,
                "name": "Tuna",
                "offerType": 1,
                "category": 1,
                "availability": 1,
                "amount": 6,
                "price": "185.00"
            },
            {
                "id": 99,
                "name": "Computer",
                "offerType": 1,
                "category": 0,
                "availability": 0,
                "amount": 5,
                "price": "992.00"
            },
            {
                "id": 44,
                "name": "Soap",
                "offerType": 0,
                "category": 1,
                "availability": 0,
                "amount": 2,
                "price": "892.00"
            }
        ],
        "total": "29.00"
    }
];