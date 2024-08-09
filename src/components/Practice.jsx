import React, { useCallback, useEffect, useState } from "react";

const PRODUCT_URL = "https://dummyjson.com/products/";
const Practice = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const [selectedProduct, setSelectedProduct] = useState({});

  const [userSeachredData, setUserSearchData] = useState([]);

  const handleChange = useCallback(e => {
    setSearchProduct(e.target.value);
  }, []);

  const fetchProductByID = useCallback(
    async id => {
      const result = await fetch(PRODUCT_URL + id);
      const data = await result.json();
      setSelectedProduct(data);
      setUserSearchData([...userSeachredData, data]);
    },
    [userSeachredData],
  );

  useEffect(() => {
    if (searchProduct.length > 0) {
      const findByID = userSeachredData.find(
        data => data.id === +searchProduct,
      );
      if (findByID) {
        setSelectedProduct(findByID);
      } else {
        fetchProductByID(searchProduct);
      }
    } else {
      setSelectedProduct({});
    }
  }, [fetchProductByID, searchProduct, userSeachredData]);

  return (
    <>
      <div>
        <h1>Search Product</h1>
        <input type="text" value={searchProduct} onChange={handleChange} />
        {selectedProduct && (
          <div key={selectedProduct.id}>
            <h1>{selectedProduct.title}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Practice;
