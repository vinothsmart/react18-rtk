import React, { createContext, useCallback, useEffect, useState } from "react";
import ThemeChildren from "./ThemeChildren";
import ThemeInnerChild from "./ThemeInnerChild";

export const ThemeContext = createContext(null);

const ThemeParent = () => {
  const [themeEnable, setThemeEnable] = useState(false);
  const [themeColor, setThemeColor] = useState("#000");

  const handleButton = useCallback(() => {
    setThemeEnable(prev => !prev);
  }, []);

  useEffect(() => {
    themeEnable ? setThemeColor("#fff") : setThemeColor("#000");
  }, [themeEnable]);

  return (
    <ThemeContext.Provider value={{ themeColor, handleButton }}>
      <ThemeChildren>
        <ThemeInnerChild />
      </ThemeChildren>
    </ThemeContext.Provider>
  );
};

export default ThemeParent;
