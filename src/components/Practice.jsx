import React, { useCallback, useState } from "react";

const Practice = () => {
  const [email, setName] = useState("");
  const [emailList, setEmailList] = useState([]);

  const handleChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleSumbit = useCallback(() => {
    setEmailList(preV => [...preV, email]);
  }, [email]);

  const handleDelete = useCallback(
    email => () => {
      const newNamesList = emailList.filter(item => item !== email);
      setEmailList(newNamesList);
    },
    [emailList],
  );

  const handleUpdateEmail = useCallback(
    email => () => {
      setName(email);
    },
    [],
  );

  return (
    <div>
      <input text="input" name="email" onChange={handleChange} value={email} />
      <button onClick={handleSumbit}>Add It </button>
      <div>
        {emailList.map(item => {
          return (
            <div key={item}>
              <h1 onClick={handleDelete(item)}>{item}</h1>
              <button onClick={handleUpdateEmail(email)}>edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Practice;
