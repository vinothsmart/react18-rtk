import React, { useEffect, useState } from "react";

const Practice = () => {
  const [currentTime, setCurrnetTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    setInterval(() => {
      setCurrnetTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h1> {currentTime}</h1>
    </>
  );
};

export default Practice;
