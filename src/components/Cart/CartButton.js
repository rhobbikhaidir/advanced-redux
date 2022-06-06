import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slices";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showCartHandler = (e) => {
    e.preventDefault();
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
