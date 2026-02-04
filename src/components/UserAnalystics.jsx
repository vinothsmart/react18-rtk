import { useEffect } from "react";

const UserAnalystics = ({ setUserTimeSpend }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setUserTimeSpend(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setUserTimeSpend]);

  return <div>UserAnalystics</div>;
};
export default UserAnalystics;
