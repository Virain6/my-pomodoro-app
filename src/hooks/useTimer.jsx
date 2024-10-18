import React, { useEffect, useState, useRef } from "react";

const useTimer = (initialTime) => {
  const [remainingTime, setRemainingTime] = useState(initialTime); // Initial time in seconds
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null); // Use useRef to persist the interval across renders

  // Start the timer
  const startTimer = () => setIsPaused(false);

  // Pause the timer and clear the interval
  const pauseTimer = () => {
    setIsPaused(true);
    clearInterval(timerRef.current);
  };

  // Reset the timer to its initial value
  const resetTimer = () => {
    setIsPaused(true);
    clearInterval(timerRef.current);
    setRemainingTime(initialTime);
  };

  useEffect(() => {
    if (!isPaused && remainingTime > 0) {
      // Only run the timer if it's not paused and there's time left
      timerRef.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current); // Clear interval when paused or time reaches 0
    }

    // Cleanup the interval when the component unmounts or on pause
    return () => clearInterval(timerRef.current);
  }, [isPaused, remainingTime]); // Dependencies to control re-execution of the effect

  return { remainingTime, isPaused, startTimer, pauseTimer, resetTimer };
};

export default useTimer;
