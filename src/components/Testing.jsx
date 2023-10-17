import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export const Testing = ({ driverOrders, selectedStoresState }) => {
  // const [list, setList] = useState([]);

  // const fetchUsers = useCallback(async () => {
  //   const response = await fetch(usersDataURL);
  //   const data = await response.json();
  //   setList(data);
  // }, []);

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  const [driverDelayed, setDriverOrdersState] = useState("");
  const [thersholdTimeMintue, setThersholdTimeMintue] = useState("");
  const [isOntime, setIsOntime] = useState(false);

  const timeChanges = useCallback(item => {
    // let currentTime, orderCreatedTime, diffVal, currentTimeGMT;
    // currentTimeGMT = moment().utc().format("YYYY-MM-DD HH:mm:ss");
    // currentTime = moment(currentTimeGMT);
    // orderCreatedTime = moment(item?.createdAt);
    // diffVal = currentTime.diff(orderCreatedTime, "seconds");
    // return diffVal;
  }, []);

  const fetchDriverData = useCallback(() => {
    driverOrders?.forEach(element => {
      const thresholdValue =
        selectedStoresState.storeConfigs[element.storeId].sosThreshold;
      setThersholdTimeMintue(thresholdValue / 60);
      const delayed = timeChanges(element);
      const time = toHoursAndMinutes(delayed);
      setDriverOrdersState(time);
      // delayed greater than 30 minutes
      if (delayed < thresholdValue) {
        setIsOntime(true);
      } else {
        setIsOntime(false);
        const reducedTime = toHoursAndReduceMinutes(delayed, thresholdValue);
        setDriverOrdersState(reducedTime);
      }
    });
  }, [
    driverOrders,
    selectedStoresState.storeConfigs,
    timeChanges,
    toHoursAndMinutes,
    toHoursAndReduceMinutes,
  ]);

  // loading befor the set interval
  useLayoutEffect(() => {
    fetchDriverData();
  }, [fetchDriverData]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDriverData();
    }, 1000);
    return () => clearInterval(interval);
  }, [fetchDriverData]);

  const padTo2Digits = num => num.toString().padStart(2, "0");

  const toHoursAndMinutes = totalSeconds => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  };

  const toHoursAndReduceMinutes = (totalSeconds, thresholdValue) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padTo2Digits(minutes - thresholdValue / 60)}:${padTo2Digits(
      seconds,
    )}`;
  };

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
