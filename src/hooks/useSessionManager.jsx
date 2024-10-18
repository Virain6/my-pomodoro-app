import { useState, useEffect } from "react";
import { useQuery, useMutation } from "convex/react";

export const useSessionManager = (api) => {
  // db
  const sessions = useQuery(api.sessions.getAllSessions);
  const addSession = useMutation(api.sessions.addSession);

  // State for handling new session input
  const [newSession, setNewSession] = useState({
    sessionType: "",
    duration: 25,
    isCompleted: false,
    isPaused: false,
    remainingTime: 1500, // Default to 25 minutes (in seconds)
  });

  // DATABASE FUNCTION //
  // Handles adding a new session to the database
  const handleAddSession = (e) => {
    e.preventDefault();
    addSession({
      userId: "user-123", // Replace with actual userId from authentication
      sessionType: newSession.sessionType,
      startTime: Date.now(),
      duration: newSession.duration,
      isCompleted: newSession.isCompleted,
      isPaused: newSession.isPaused,
      remainingTime: newSession.remainingTime,
    });
    console.log("Added session to database" + newSession);
  };

  // Input setters for handling form data
  const setSessionType = (sessionType) =>
    setNewSession((prev) => ({ ...prev, sessionType }));
  const setSessionDuration = (duration) =>
    setNewSession((prev) => ({ ...prev, duration }));
  const setSessionCompletion = (isCompleted) =>
    setNewSession((prev) => ({ ...prev, isCompleted }));

  return {
    newSession,
    setSessionType,
    setSessionDuration,
    setSessionCompletion,
    handleAddSession,
  };
};
