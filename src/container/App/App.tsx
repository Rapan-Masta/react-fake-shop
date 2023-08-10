import { Container } from '@mui/material'
import Header from '../Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'container/pages/Home'
import CartPage from 'container/pages/Cart/CartPage'
import AboutUsPage from 'container/pages/About/AboutUsPage'
import PaymantPage from 'container/pages/Paymant/PaymantPage'
import ShippingPage from 'container/pages/Shipping/ShippingPage'
import { Omit, omit } from 'lodash'

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
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => omit(prevState, [id]))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Container>
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCard={addProductToCard} />}
                    ></Route>
                    <Route path="/abous-us" element={<AboutUsPage />} />
                    <Route path="/payment" element={<PaymantPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}

export default App
