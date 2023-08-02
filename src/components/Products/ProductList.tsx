import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCard: (count: number, price: number) => void
}
const ProductList = ({ addProductToCard }: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{ margin: '30px 0', textTransform: 'uppercase' }}
                align="center"
            >
                Product List
            </Typography>
            <Grid container spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        image,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCard={addProductToCard}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </div>
    )
}
export default ProductList
