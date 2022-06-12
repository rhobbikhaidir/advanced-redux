import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slices";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;

  const removeProduct = (e) => {
    e.preventDefault();
    dispatch(cartAction.removeItemFromCart(id));
  };

  const addItemsProduct = (e) => {
    dispatch(
      cartAction.addItemToCart({
        id,
        price,
        title,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProduct}>-</button>
          <button onClick={addItemsProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
