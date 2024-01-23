import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContaier from "./components/CardContaier";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./features/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      <Navbar />
      <CardContaier />
    </main>
  );
}
export default App;
