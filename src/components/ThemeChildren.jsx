import React, { useContext } from "react";
import { ThemeContext } from "./ThemeParent";

const ThemeChildren = () => {
  const { themeColor, handleButton } = useContext(ThemeContext);
  return (
    <h1 style={{ backgroundColor: themeColor }}>
      <button onClick={handleButton}>Theme</button>
    </h1>
  );
};

export default ThemeChildren;
