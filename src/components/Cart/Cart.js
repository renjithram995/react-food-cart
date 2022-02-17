import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Model";
import CartContext from "../../store/cart.context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemAddHandler = (item) => {
    const selectedItem = {
        id: item.id,
        name: item.name,
        price: item.price
      }
      cartCtx.addItem(selectedItem, 1)
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.item.map((e) => (
        <CartItem
          key={e.id}
          {...e}
          onRemove={cartCtx.removeItem.bind(null, e.id)}
          onAdd={cartItemAddHandler.bind(null, e)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onCancel={props.onCancel}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCancel}>
          Close
        </button>
        {cartCtx.item.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
