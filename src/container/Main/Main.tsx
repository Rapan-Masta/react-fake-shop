import { Container } from '@mui/material'
import Home from 'container/pages/Home'

type Props = {
    addProductToCard: (count: number, price: number) => void
}

const Main = ({ addProductToCard }: Props) => {
    return (
        <Container>
            <Home addProductToCard={addProductToCard} />
        </Container>
    )
}
export default Main
