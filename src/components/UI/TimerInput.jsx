import React from "react";

const TimeInput = ({
  minutes,
  setMinutes,
  seconds,
  setSeconds,
  handleSecondsChange,
}) => {
  return (
    <div className="flex space-x-2 bg-gray-800 rounded-lg p-4">
      <input
        type="number"
        value={minutes > 10 ? minutes : `0${minutes}`}
        onChange={(e) => setMinutes(e.target.value)}
        className="bg-transparent text-4xl text-white text-center outline-none border-none w-20"
        min="0"
      />
      <span className="text-2xl">:</span>
      <input
        type="number"
        value={seconds > 10 ? seconds : `0${seconds}`}
        onChange={(e) => handleSecondsChange(setSeconds, e.target.value)}
        className="bg-transparent text-4xl text-white text-center outline-none border-none w-20"
        min="0"
        max="59"
      />
    </div>
  );
};

export default TimeInput;
