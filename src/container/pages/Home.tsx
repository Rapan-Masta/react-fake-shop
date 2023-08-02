import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCard: (count: number, price: number) => void
}
const Home = ({ addProductToCard }: Props) => {
    return (
        <>
            <ProductList addProductToCard={addProductToCard} />
        </>
    )
}
export default Home
