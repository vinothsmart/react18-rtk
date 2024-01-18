import React, { useContext } from "react";
import { ThemeContext } from "./ThemeParent";

const ThemeChildren = ({ children }) => {
  const { themeColor } = useContext(ThemeContext);
  return <h1 style={{ backgroundColor: themeColor }}>{children}</h1>;
};

export default ThemeChildren;
