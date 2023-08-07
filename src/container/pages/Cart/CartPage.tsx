import { Grid, Typography } from '@mui/material'
import CartTotal from 'components/Cart/CartTotal'
import CartProductList from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListItemExtended'

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
            <div>
                <Grid container spacing={4}>
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    ></CartProductList>
                </Grid>

                <CartTotal productsInCart={productsInCart}></CartTotal>
            </div>
        </div>
    )
}

export default CartPage
