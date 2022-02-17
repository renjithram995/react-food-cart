import classes from './Cart.module.css'
import DUMMY_MEALS from "../../dummyMeals.json";
import Modal from '../UI/Model';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{
        DUMMY_MEALS.map(e => <li key={e.id}>{e.name}</li>)}</ul>
    return (
        <Modal onCancel={props.onCancel}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>36.21</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCancel}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )

};

export default Cart;