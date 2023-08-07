import { Typography } from '@mui/material'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <Typography variant="h4" component="h1" sx={{ margin: '30px 0' }}>
                Card
            </Typography>

            <CartProductList productsInCart={productsInCart}></CartProductList>
            <CartTotal productsInCart={productsInCart}></CartTotal>
        </div>
    )
}

export default CartPage
