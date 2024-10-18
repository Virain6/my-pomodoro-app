import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Table for Pomodoro sessions
  pomodoro_sessions: defineTable({
    userId: v.string(), // The unique ID of the user
    sessionType: v.string(), // Type of session: "pomodoro", "short_break", "long_break"
    startTime: v.number(), // Start time as a Unix timestamp
    duration: v.number(), // Duration of the session in minutes
    isCompleted: v.boolean(), // Whether the session was completed
    isPaused: v.boolean(), // Whether the session is currently paused
    remainingTime: v.number(), // Remaining time in the session (in seconds)
    createdAt: v.number(), // Timestamp when the session was created
  }),

  // Table for user preferences
  user_preferences: defineTable({
    userId: v.string(), // The unique ID of the user
    pomodoroDuration: v.number(), // Duration of Pomodoro sessions (default 25 minutes)
    shortBreakDuration: v.number(), // Duration of short breaks (default 5 minutes)
    longBreakDuration: v.number(), // Duration of long breaks (default 15 minutes)
    longBreakAfter: v.number(), // Number of Pomodoros before a long break (default 4)
    createdAt: v.number(), // Timestamp when preferences were created/updated
  }),
});
