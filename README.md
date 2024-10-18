# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

tables

1. pomodoro_sessions Table
   This table stores each Pomodoro session for users.
   Field Name Data Type Description
   userId string The unique ID of the user (from authentication).
   sessionType string Type of session: "pomodoro", "short_break", "long_break".
   startTime number Timestamp when the session started (Unix timestamp).
   duration number Duration of the session in minutes.
   isCompleted boolean Whether the session was completed.
   isPaused boolean Whether the session is currently paused.
   remainingTime number Time left in the session (in seconds).
   createdAt number Timestamp when the session was created.
2. user_preferences Table
   This table stores user-specific preferences for Pomodoro settings.
   Field Name Data Type Description
   userId string The unique ID of the user (from authentication).
   pomodoroDuration number Duration of Pomodoro sessions (default 25 minutes).
   shortBreakDuration number Duration of short breaks (default 5 minutes).
   longBreakDuration number Duration of long breaks (default 15 minutes).
   longBreakAfter number Number of Pomodoro sessions before taking a long break (default 4).
   createdAt number Timestamp when the preferences were created/updated.

use clerk for acounts
use vercel to deploy

figur eout exactly how your gonna manage the timer

Next steos

1. create timer and how it works
   in sessions set up logic to switch between pomodoro and breaks. maybe by passing on a function like timerend that wilkl chnage a value
2. update timer in database
3. add in users and accounts via clerk

components - for UI components
Hooks - for logic components
