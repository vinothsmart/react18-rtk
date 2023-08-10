import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import ProductCard from "./ProductCard";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const { data: products } = useSelector(state => state.products);

  // const fetchProducts = useCallback(async () => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products");
  //     const data = await response.json();
  //     setProducts(data);
  //     setIsLoading(false);
  //   } catch (_e) {
  //     setIsError(true);
  //   }
  // }, []);

  const fetchProducts = useCallback(async () => {
    try {
      dispatch(getProducts());
      setIsLoading(false);
    } catch (_e) {
      setIsError(true);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <h1>Component Level Loading...</h1>;
  if (isError) return <h1>Component Level Error</h1>;

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
