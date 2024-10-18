import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// getting all the sessions (will be chnaged to by user)
export const getAllSessions = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("pomodoro_sessions").collect();
  },
});

// adding a session
export const addSession = mutation({
  // Define the arguments required to add a session
  args: {
    userId: v.string(),
    sessionType: v.string(),
    startTime: v.number(),
    duration: v.number(),
    isCompleted: v.boolean(),
    isPaused: v.boolean(),
    remainingTime: v.number(),
  },

  handler: async (ctx, args) => {
    // Insert the session into the "pomodoro_sessions" table
    await ctx.db.insert("pomodoro_sessions", {
      userId: args.userId,
      sessionType: args.sessionType,
      startTime: args.startTime,
      duration: args.duration,
      isCompleted: args.isCompleted,
      isPaused: args.isPaused,
      remainingTime: args.remainingTime,
      createdAt: Date.now(), // Add the current timestamp for when the session was created
    });
  },
});
