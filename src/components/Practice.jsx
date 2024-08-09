import React, { useCallback, useEffect, useState } from "react";

const PRODUCT_URL = "https://dummyjson.com/products";
const Practice = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const [selectedProduct, setSelectedProduct] = useState({});

  const [userSeachredData, setUserSearchData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [searchedIds, setSearchedIds] = useState([]);

  const handleChange = useCallback(e => {
    setSearchProduct(e.target.value);
  }, []);

  const fetchProductByID = useCallback(async id => {
    const result = await fetch(PRODUCT_URL + id);
    const data = await result.json();
    setSelectedProduct(data);
    setUserSearchData(prev => [...prev, data]);
    setSearchedIds(prev => [...prev, id]);
  }, []);

  useEffect(() => {
    if (searchProduct !== "") {
      const checkPrevious = searchedIds.includes(searchProduct.id);
      if (checkPrevious) {
        const findByPreviousData = userSeachredData.find(
          item => item.id === searchProduct.id,
        );
        setSelectedProduct(findByPreviousData);
      } else {
        fetchProductByID(searchProduct);
      }
    } else {
      setSelectedProduct({});
    }
  }, [fetchProductByID, searchProduct, searchedIds, userSeachredData]);
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
