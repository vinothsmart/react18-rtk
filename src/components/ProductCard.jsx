import { useCallback } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const ProductCard = ({ id, title, image, price, item }) => {
  const dispatch = useDispatch();
  const addProduct = useCallback(
    product => () => {
      dispatch(add(product));
    },
    [dispatch],
  );

  return (
    <div className="col-md-3 mb-2">
      <Card key={id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>INR - {price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary" onClick={addProduct(item)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
