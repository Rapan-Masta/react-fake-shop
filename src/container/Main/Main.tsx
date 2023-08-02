import { Container } from '@mui/material'
import Home from 'container/pages/Home'

type Props = {
    addProductToCard: (id: number, count: number) => void
}

const Main = ({ addProductToCard }: Props) => {
    return (
        <Container>
            <Home addProductToCard={addProductToCard} />
        </Container>
    )
}
export default Main
