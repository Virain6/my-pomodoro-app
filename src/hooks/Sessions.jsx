import React, { useState } from "react";
import DisplayTimer from "../components/timerDisplay";
import UsePomodoro from "./usePomodoro";

const Session = () => {
  const [isEditing, setIsEditing] = useState(true);

  // Timer settings
  const [pomodoroTime, setPomodoroTime] = useState({ minutes: 25, seconds: 0 });
  const [shortBreakTime, setShortBreakTime] = useState({
    minutes: 5,
    seconds: 0,
  });
  const [longBreakTime, setLongBreakTime] = useState({
    minutes: 15,
    seconds: 0,
  });
  const [remainingTime, setRemainingTime] = useState(null); // Stores remaining time when editing

  const handleStartSession = (pomodoroMinutes, pomodoroSeconds) => {
    setPomodoroTime({ minutes: pomodoroMinutes, seconds: pomodoroSeconds });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      {isEditing ? (
        <UsePomodoro
          startSession={handleStartSession}
          setPomodoroTime={setPomodoroTime}
          setShortBreakTime={setShortBreakTime}
          setLongBreakTime={setLongBreakTime}
          initialPomodoroTime={pomodoroTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
        />
      ) : (
        <DisplayTimer
          initialMinutes={pomodoroTime.minutes}
          initialSeconds={pomodoroTime.seconds}
          remainingTime={remainingTime}
          countDown={true}
        />
      )}
    </div>
  );
};

export default Session;
