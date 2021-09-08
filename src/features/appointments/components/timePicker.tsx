import React, { useState } from "react";
import ScheduleSelector from "react-schedule-selector";

const TimePicker: React.FC = () => {
  const [schedule, setSchedule] = useState();

  const handleChange = (newSchedule: React.SetStateAction<undefined>) => {
    setSchedule(newSchedule);
  };

  return (
    <ScheduleSelector
      selection={schedule}
      numDays={5}
      minTime={8}
      maxTime={16}
      hourlyChunks={2}
      onChange={handleChange}
    />
  );
};

export default TimePicker;
