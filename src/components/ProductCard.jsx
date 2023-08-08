import { Button, Card } from "react-bootstrap";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }}>
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
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
