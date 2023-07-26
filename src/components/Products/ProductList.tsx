import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
type Props = {}
const ProductList = (props: Props) => {
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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 14 Pro"
                        description="This is iPhone 14 Pro"
                        type="phone"
                        capacity="64"
                        price={1000}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 13"
                        description="This is iPhone 13"
                        type="phone"
                        capacity="32"
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        title="iPhone 12 Extra"
                        description="This is iPhone 12 Extra"
                        type="phone"
                        capacity="16"
                        price={500}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
export default ProductList
