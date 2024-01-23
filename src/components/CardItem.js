import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const CardItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = useCallback(
    (id) => () => {
      dispatch(removeItem({ id }));
    },
    [dispatch]
  );

  const handleIncrease = useCallback(
    (id) => () => {
      dispatch(increase({ id }));
    },
    [dispatch]
  );

  const handleDecrease = useCallback(
    (id, amount) => () => {
      if (amount === 1) {
        dispatch(removeItem({ id }));
        return;
      }
      dispatch(decrease({ id }));
    },
    [dispatch]
  );

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">Rs{price}</h4>
        <button className="remove-btn" onClick={handleRemoveItem(id)}>
          remove
        </button>
      </div>

      <div>
        <button className="amount-btn" onClick={handleIncrease(id)}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={handleDecrease(id, amount)}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CardItem;
