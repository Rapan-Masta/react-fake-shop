import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/abous-us">About us</MenuItem>
            <MenuItem to="/payment">Payment</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
