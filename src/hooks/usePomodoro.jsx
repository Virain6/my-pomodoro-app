import React, { useState } from "react";
import TimeInput from "../components/UI/TimerInput";

const UsePomodoro = ({
  startSession,
  setPomodoroTime,
  setShortBreakTime,
  setLongBreakTime,
  initialPomodoroTime,
  shortBreakTime,
  longBreakTime,
}) => {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(
    initialPomodoroTime.minutes
  );
  const [pomodoroSeconds, setPomodoroSeconds] = useState(
    initialPomodoroTime.seconds
  );
  const [shortBreakMinutes, setShortBreakMinutes] = useState(
    shortBreakTime.minutes
  );
  const [shortBreakSeconds, setShortBreakSeconds] = useState(
    shortBreakTime.seconds
  );
  const [longBreakMinutes, setLongBreakMinutes] = useState(
    longBreakTime.minutes
  );
  const [longBreakSeconds, setLongBreakSeconds] = useState(
    longBreakTime.seconds
  );

  const handleStart = () => {
    setPomodoroTime({ minutes: pomodoroMinutes, seconds: pomodoroSeconds });
    setShortBreakTime({
      minutes: shortBreakMinutes,
      seconds: shortBreakSeconds,
    });
    setLongBreakTime({ minutes: longBreakMinutes, seconds: longBreakSeconds });
    startSession(pomodoroMinutes, pomodoroSeconds); // Resume with updated values
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-6">Edit Pomodoro Timer</h1>

      {/* Input fields for Pomodoro, Short Break, and Long Break */}
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg">Pomodoro</label>
          <TimeInput
            minutes={pomodoroMinutes}
            setMinutes={setPomodoroMinutes}
            seconds={pomodoroSeconds}
            setSeconds={setPomodoroSeconds}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg">Short Break</label>
          <TimeInput
            minutes={shortBreakMinutes}
            setMinutes={setShortBreakMinutes}
            seconds={shortBreakSeconds}
            setSeconds={setShortBreakSeconds}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="mb-2 text-lg">Long Break</label>
          <TimeInput
            minutes={longBreakMinutes}
            setMinutes={setLongBreakMinutes}
            seconds={longBreakSeconds}
            setSeconds={setLongBreakSeconds}
          />
        </div>
      </div>

      <button
        onClick={handleStart}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg mt-6"
      >
        Start Pomodoro
      </button>
    </div>
  );
};

export default UsePomodoro;
