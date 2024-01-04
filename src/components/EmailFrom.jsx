import React from "react";

const EmailFrom = ({
  values,
  handleChange,
  handleSumbit,
  showText,
  usersList,
  handleRemove,
}) => {
  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={values.email}
        />
      </div>
      <button onClick={handleSumbit}>Submit</button>
      {showText &&
        usersList.map(user => (
          <div key={user.email}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={handleRemove(user.email)}>Remove</button>
          </div>
        ))}
    </>
  );
};

export default EmailFrom;
