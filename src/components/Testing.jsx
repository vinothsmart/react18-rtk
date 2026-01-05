import React, { useCallback, useEffect, useState } from "react";

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export const Testing = () => {
  const duplicateArray = [14, 23, 6, 6, 14, 56, 87, 14];
  //   const uniqueArray = [...new Set(duplicateArray)];
  const uniqueArray = duplicateArray.filter((item, index) => {
    return duplicateArray.indexOf(item) === index;
  });

  // console.log(uniqueArray);

  const months = ["May", "Feb", "Feb", "Jan", "March", "April", "May"];

  const countOfDuplicate = months.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});

  console.log(countOfDuplicate);

  const value = "vino";

  console.log(!isNaN(value));

  const [list, setList] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(usersDataURL);
    const data = await response.json();
    setList(data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <main>
      <h1> List Users Page</h1>
      {list.map(({ id, name }) => (
        <div key={id}>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
