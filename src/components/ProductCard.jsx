import { Button, Card } from "react-bootstrap";

const ProductCard = ({ id, title, image, price }) => {
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
          <Button variant="primary">Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
