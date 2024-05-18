import React from "react";

const Practice = () => {
  const data = [
    {
      name: "Mark",
      poistion: "CEO",
      directReports: [
        {
          name: "Steve",
          poistion: "Vp",
          directReports: [
            {
              name: "Terry",
              poistion: "Sales",
              directReports: [
                {
                  name: "April",
                  poistion: "Associate Sales",
                  directReports: [],
                },
              ],
            },
          ],
        },
        {
          name: "July",
          poistion: "Marketing",
          directReports: [],
        },
      ],
    },
    {
      name: "Augues",
      poistion: "Engineering",
      directReports: [],
    },
  ];

  // expected output
  // [
  //   { name: "April", poistion: "Associate Sales", reportsTo: "Sales" },
  //   { name: "Terry", poistion: "Sales", reportsTo: "Vp" },
  //   { name: "Steve", poistion: "Vp", reportsTo: "CEO" },
  //   { name: "July", poistion: "Marketing", reportsTo: "CEO" },
  //   { name: "Mark", poistion: "CEO" },
  //   { name: "Augues", poistion: "Engineering" },
  // ];

  // const flatten = (data, reportsTo = null) => {
  //   return data.reduce((acc, { name, poistion, directReports }) => {
  //     return [
  //       ...acc,
  //       { name, poistion, reportsTo },
  //       ...flatten(directReports, name),
  //     ];
  //   }, []);
  // };

  // another way to solve the problem
  const flatten = (data, reportsTo = null) => {
    return data.reduce((acc, { name, poistion, directReports }) => {
      const reports = [
        { name, poistion, reportsTo },
        ...flatten(directReports, name),
      ];

      return [...acc, ...reports];
    }, []);
  };

  console.log(flatten(data));

  return <h1>Testing</h1>;
};

export default Practice;
