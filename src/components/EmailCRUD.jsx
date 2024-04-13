import React, { useCallback, useState } from "react";

const EmailCRUD = () => {
  const [email, setName] = useState("");
  const [emailList, setEmailList] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

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

  const viewEmail = useCallback(
    email => () => {
      setName(email);
      setSelectedEmail(email);
      setIsUpdate(true);
    },
    [],
  );

  const handleUpdate = useCallback(() => {
    setEmailList(preV =>
      preV.map(item => (item === selectedEmail ? email : item)),
    );
    setIsUpdate(false);
  }, [email, selectedEmail]);

  return (
    <div>
      <input text="input" name="email" onChange={handleChange} value={email} />
      <button onClick={isUpdate ? handleUpdate : handleSumbit}>
        {isUpdate ? "Update it" : "Add It"}
      </button>
      <div>
        {emailList.map(item => {
          return (
            <div key={item}>
              <h1 onClick={handleDelete(item)}>{item}</h1>
              <button onClick={viewEmail(item)}>edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailCRUD;
