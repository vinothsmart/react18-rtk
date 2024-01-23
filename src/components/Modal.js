import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  const clearCartItems = useCallback(() => {
    dispatch(clearCart());
    dispatch(closeModal());
  }, [dispatch]);

  const handleClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={clearCartItems}
          >
            confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={handleClose}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
