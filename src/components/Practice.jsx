import { useState, useCallback } from "react";
import UserAnalystics from "./UserAnalystics";

const Practice = () => {
  const [userTimeSpend, setUserTimeSpend] = useState(0);
  const [showData, setShowData] = useState(false);

  const handeClick = useCallback(() => {
    setShowData(prev => !prev);
  }, []);

  return (
    <>
      <h1>Testing Page</h1>
      <button onClick={handeClick}> Show user Spend Data </button>
      <UserAnalystics setUserTimeSpend={setUserTimeSpend} />
      {showData && (
        <div>
          <p> User spends: {userTimeSpend} </p>
        </div>
      )}
    </>
  );
};

export default Practice;
