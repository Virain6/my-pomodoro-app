import { query } from "./_generated/server";

export const getAllPreferences = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("user_preferences").collect();
  },
});
