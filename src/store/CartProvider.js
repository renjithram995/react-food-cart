import { useReducer } from 'react';
import CartContext from './cart.context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    const cartValue = JSON.parse(JSON.stringify(state.items))
    debugger
    if (action.type === 'Add') {
        const index = cartValue.findIndex(e => e.id === action.value.id)
        if (index !== -1) {
            cartValue[index].count += action.count
        } else {
            cartValue.push({ ...action.value, count: action.count})
        }
        return {
            items: cartValue,
            totalAmount: state.totalAmount + (action.value.price * action.count)
        }
    } else if (action.type === 'Remove') {
        const index = cartValue.findIndex(e => e.id === action.value)
        let removedPrice = 0
        if (index !== -1) {
            cartValue[index].count--
            removedPrice = cartValue[index].price || 0
        }
        if (cartValue[index].count < 1) {
            cartValue.splice(index, 1)
        }
        return {
            items: cartValue,
            totalAmount: state.totalAmount - removedPrice
        }
    }
    return defaultCartState;
}
const CartProvider = (props) => {
    const [cartState, dispatchCartACtion] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = (item, count) => {
        debugger
        dispatchCartACtion({
            type: 'Add',
            value: item,
            count: count
        })
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartACtion({
            type: 'Remove',
            value: id
        })
    }
    const CartContextData = {
        item: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={CartContextData}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;