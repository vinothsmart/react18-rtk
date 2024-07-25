import React, { useCallback, useEffect, useState } from "react";

const Practice = ({ timeoutDealy = 3000 }) => {
  const [userSearch, setUserSearch] = useState();
  const [apiValue, setApiValue] = useState("");

  const handleChange = useCallback(e => {
    setUserSearch(e.target.value);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setApiValue(userSearch);
    }, timeoutDealy);
  }, [userSearch, timeoutDealy]);
  return (
    <>
      <h1> Search </h1>
      <input type="text" name="search" onChange={handleChange} />
      <h2>{apiValue}</h2>
    </>
  );
};

export default Practice;
