import React, { useCallback, useEffect, useState } from "react";
import TimeComponent from "./TimeComponent";

const TimeComponent2 = () => {
  var mainDate = new Date();
  var [time, setTime] = useState({
    year:mainDate.getFullYear(),
    month:mainDate.getMonth(),
    date:mainDate.getDate(),
    day:mainDate.getDay(),
    hour: mainDate.getHours(),
    minute: mainDate.getMinutes(),
    second: mainDate.getSeconds(),
  });

  function newTime() {
    mainDate = new Date();
    setTime({
        year:mainDate.getFullYear(),
        month:mainDate.getMonth(),
        date:mainDate.getDate(),
        day:mainDate.getDay(),
      hour: mainDate.getHours(),
      minute: mainDate.getMinutes(),
      second: mainDate.getSeconds(),
    });
  }
  const changeTime = useCallback(() => {
    setInterval(newTime, 1000);
  }, [newTime]);

  useEffect(() => {
    changeTime();
  }, [time, changeTime]);
  return (
    <div>
      <TimeComponent value={time} />
    </div>
  );
};

export default TimeComponent2;
