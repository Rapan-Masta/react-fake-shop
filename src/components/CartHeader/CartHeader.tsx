import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

type productsObjectType = {
    [id: number]: Product
}

const CartHeader = ({ productsInCart }: Props) => {
    const productsObject: productsObjectType = getProductsObject(productsArray)

    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title}:
                    {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
