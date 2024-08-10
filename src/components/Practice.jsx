import React from "react";

const Practice = () => {
  const test = "vinoth kanna";

  const nametoUppperCase = sentence => {
    return sentence
      .split(" ")
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(" ");
  };

  console.log("vinoth", nametoUppperCase(test));
  const Captilize = str => {
    return str
      .split(" ")
      .map(word => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  console.log("second", Captilize(test));

  const items = [
    { name: "east", value: 21 },
    { name: "south", value: 37 },
    { name: "atlanta", value: 45 },
    { name: "Terrain", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zone", value: 37 },
  ];

  const sortItems = items.sort((a, b) => {
    return a.value - b.value;
  });
  return (
    <>
      <h1>Testing Page</h1>
    </>
  );
};

export default Practice;
