import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContaier from "./components/CardContaier";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Modal />
      <Navbar />
      <CardContaier />
    </main>
  );
}
export default App;
