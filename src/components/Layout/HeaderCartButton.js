import { useContext, useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/cartIcon.svg";
import CartContext from "../../store/cart.context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighligher] = useState(false)
  const headerCtx = useContext(CartContext)
  const totalOrders = headerCtx.item.reduce((count, data) => count + data.count, 0)
  const cartItemWatcher = () => {
    if (!totalOrders) {
      return
    }
    setBtnHighligher(true)
    const timerIdentifier = setTimeout(() => {
      setBtnHighligher(false)
    }, 300)
    return () => {
      clearTimeout(timerIdentifier)
    }
  }
  useEffect(cartItemWatcher, [totalOrders])
  const buttonClass = `${classes.button} ${btnHighlighted ? classes.bump : ''}`
  return (
    <button className={buttonClass} {...props}>
      <span className={classes.icon}>
          <CartIcon />
      </span>
      <span>{props.children}</span>
      <span className={classes.badge}>{totalOrders}</span>
    </button>
  );
};
export default HeaderCartButton;
