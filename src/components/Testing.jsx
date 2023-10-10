import React, { useCallback, useEffect, useState } from "react";

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export const Testing = () => {
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
            <div className="col-lg-4">
              <p>{name}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
