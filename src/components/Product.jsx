import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (_e) {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <h1>Component Level Loading...</h1>;
  if (isError) return <h1>Component Level Error</h1>;

  const cards = products.map(product => (
    <ProductCard key={product.id} title={product.title} />
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      {cards}
    </>
  );
};

export default Product;
