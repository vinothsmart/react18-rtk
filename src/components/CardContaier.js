import { useCallback } from "react";
import CardItem from "./CardItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";

const CardContaier = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const clearCartItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>Rs{total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCartItems}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CardContaier;