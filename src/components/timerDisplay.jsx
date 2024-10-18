import React from "react";
import useTimer from "../hooks/useTimer";

const DisplayTimer = ({ initialMinutes, initialSeconds, countDown = true }) => {
  // Convert initial time to seconds and pass to useTimer
  const initialTimeInSeconds = initialMinutes * 60 + initialSeconds;
  const { remainingTime, isPaused, startTimer, pauseTimer, resetTimer } =
    useTimer(initialTimeInSeconds);

  const editPomodoro = () => {};
  // Convert remaining time back to minutes and seconds for display
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  // Calculate progress percentage for the progress bar
  let progressPercentage;
  if (countDown) {
    progressPercentage = (remainingTime / initialTimeInSeconds) * 100;
  } else {
    progressPercentage = 100 - (remainingTime / initialTimeInSeconds) * 100;
  }

  // Ensure the progress bar always has some minimal width (e.g., 1%)
  if (progressPercentage < 1 && remainingTime > 0) {
    progressPercentage = 1; // Minimum width of 1%
  }

  return (
    <div className="flex flex-col justify-center items-center w-full text-center p-8">
      {/* Timer Display */}
      <div className="text-8xl font-bold mb-4 w-full">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>

      {/* Progress Bar */}
      <div className="w-[90%] bg-gray-200 rounded-full h-6 dark:bg-gray-700">
        <div
          className="bg-purple-600 h-6 rounded-full dark:bg-purple-500 transition-all duration-1000"
          style={{ width: `${progressPercentage}%` }} // Dynamic width with a minimum of 1%
        />
      </div>

      {/* Control Buttons */}
      <div className="space-x-4 mt-6">
        {!isPaused ? (
          <button
            onClick={pauseTimer}
            className="bg-yellow-500 text-white px-6 py-3 rounded text-lg"
          >
            Pause
          </button>
        ) : (
          <button
            onClick={startTimer}
            className="bg-blue-500 text-white px-6 py-3 rounded text-lg"
          >
            Start
          </button>
        )}

        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-lg"
        >
          Reset
        </button>
        <button
          onClick={editPomodoro}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded text-lg"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default DisplayTimer;
