import { useCallback, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import ProductCard from "./ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.products);

  const fetchProducts = useCallback(async () => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (status === "loading") return <h1>Component Level Loading...</h1>;
  if (status === "failed")
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    );

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {products.map(product => (
          <ProductCard
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            item={product}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
