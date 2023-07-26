type Product = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray:Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone  Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone Pro',
        type: 'phone',
        capacity: '12',
        price: 555,
    },
    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone Pro',
        type: 'phone',
        capacity: '15',
        price: 870,
    },
    {
        title: 'iPhone 11 ',
        description: 'This is iPhone  ',
        type: 'phone',
        capacity: '123',
        price: 667,
    },
    {
        title: 'iPhone 10 Pro',
        description: 'This is iPhone Extra',
        type: 'phone',
        capacity: '642',
        price: 850,
    },
    {
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 1200,
    },
]

export default productsArray