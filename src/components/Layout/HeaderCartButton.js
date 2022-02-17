import { useContext } from "react";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import CartContext from "../../store/cart.context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const headerCtx = useContext(CartContext)
  const totalOrders = headerCtx.item.reduce((count, data) => count + data.count, 0)
  return (
    <button className={classes.button} {...props}>
      <span className={classes.icon}>
          <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={classes.badge}>{totalOrders}</span>
    </button>
  );
};
export default HeaderCartButton;
