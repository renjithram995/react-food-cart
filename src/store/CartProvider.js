import { useState } from 'react';
import CartContext from './cart.context'

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const addItemToCartHandler = (item, count) => {
        const index = cartItems.findIndex(e => e.id === item.id)
        if (index !== -1) {
            cartItems[index].count += count
        } else {
            cartItems.push({ ...item, count: count})
        }
        setCartItems(cartItems)
        setTotalAmount(totalAmount + (item.price * count))
    };
    const removeItemFromCartHandler = (id) => {
        const index = cartItems.findIndex(e => e.id === id)
        let removedPrice = 0
        if (index !== -1) {
            cartItems[index].count--
            removedPrice = cartItems[index].price || 0
        }
        if (cartItems[index].count < 1) {
            cartItems.splice(index, 1)
        }
        setCartItems(cartItems)
        setTotalAmount(totalAmount - removedPrice)
    }
    const CartContextData = {
        item: cartItems,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={CartContextData}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;