import React, { useContext } from "react";
import { ThemeContext } from "./ThemeParent";

const ThemeInnerChild = () => {
  const { handleButton } = useContext(ThemeContext);
  return (
    <>
      <button onClick={handleButton}>Theme</button>
    </>
  );
};

export default ThemeInnerChild;
