import React, { useCallback, useState } from "react";

const Practice = () => {
  const numbers = [1, 2, 2, 3, 3, 3, 4];

  const [searchValue, setSearchValue] = useState("");
  const [filteredValues, setFilteredValues] = useState([]);

  const handleChange = useCallback(e => {
    setSearchValue(e.target.value);
  }, []);

  const handleSumbmit = useCallback(
    e => {
      e.preventDefault();
      const filterData = numbers.filter(item => item === +searchValue);
      setFilteredValues(filterData);
    },
    [searchValue],
  );
  return (
    <>
      <h1>Testing Page</h1>
      <input type="text" onChange={handleChange} name="searchNumber" />
      <button onClick={handleSumbmit}>Filter Number</button>
      <h1>
        Value searched {searchValue} : {filteredValues.length}
      </h1>
    </>
  );
};

export default Practice;
