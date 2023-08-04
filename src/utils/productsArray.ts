export type Product = {
    id: number
    image: string
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray:Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone  Pro',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: '/images/Iphone-black.webp',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone Pro',
        type: 'phone',
        capacity: '12',
        price: 555,
        image: '/images/Iphone-green.webp',
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone Pro',
        type: 'phone',
        capacity: '15',
        price: 870,
        image: '/images/Iphone-grey.webp',
    },
    {
        id: 4,
        title: 'iPhone 11 ',
        description: 'This is iPhone  ',
        type: 'phone',
        capacity: '123',
        price: 667,
        image: '/images/Iphone-purple.webp',
    },
    {
        id: 5,
        title: 'iPhone 10 Pro',
        description: 'This is iPhone Extra',
        type: 'phone',
        capacity: '642',
        price: 850,
        image: '/images/Iphone-red.webp',
    },
    {
        id: 22,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 1200,
        image: '/images/Iphone-white.webp',
    },
]

export const getProductsObject = (array:Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]:product
}), {})

const test = getProductsObject(productsArray);
console.log(test)

export default productsArray