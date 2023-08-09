import { useSelector, useDispatch } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useCallback } from "react";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const productCart = useSelector(state => state.cart);
  const removeProduct = useCallback(
    id => () => {
      dispatch(remove(id));
    },
    [dispatch],
  );
  return (
    <div className="row">
      {productCart.map(product => (
        <div className="col-md-12 mb-2">
          <Card key={product.id} className="h-100">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR - {product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: "white" }}>
              <Button variant="danger" onClick={removeProduct(product.id)}>
                Remove Item
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cart;
