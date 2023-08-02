import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Main from 'container/Main/Main'
import { useState } from 'react'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({
        1: 1,
        2: 1,
    })

    const addProductToCard = (id: number, count: number) => {
        setProductsInCart((prevState) =>
            Object.assign({}, prevState, {
                [id]: prevState[id] + count,
            })
        )
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCard(2, 5)}>add to cart</button>
            <Main addProductToCard={addProductToCard} />
        </StyledEngineProvider>
    )
}

export default App
