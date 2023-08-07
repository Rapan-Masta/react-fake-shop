import { Typography } from '@mui/material'
import productsArray, { Product, getProductsObject } from 'utils/productsArray'
import CartTotal from 'components/Cart/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

type productsObjectType = {
    [id: number]: Product
}

const CartPage = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)
    return (
        <div>
            <Typography variant="h4" component="h1" sx={{ margin: '30px 0' }}>
                Card
            </Typography>
            <div>
                <div>
                    {Object.keys(productsInCart).map((productId) => (
                        <div key={productId}>
                            {productsObject[parseInt(productId)].title}:{' '}
                            {productsInCart[parseInt(productId)]} :{' '}
                            {productsObject[parseInt(productId)].price}$
                        </div>
                    ))}
                </div>
            </div>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartPage
