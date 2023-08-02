import ProductList from 'components/Products/ProductList'

type Props = {
    addProductToCard: (id: number, count: number) => void
}
const Home = ({ addProductToCard }: Props) => {
    return (
        <>
            <ProductList addProductToCard={addProductToCard} />
        </>
    )
}
export default Home
