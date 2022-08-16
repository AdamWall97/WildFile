import { createProtectedRouter } from "./protected-router";
import { z } from "zod";

// Example router with queries that can only be hit if the user requesting is signed in
export const userProtectedRouter = createProtectedRouter()
    .query("getTrips",{
    input: z.string(),
    resolve: async ({ input, ctx }) => {
        return await ctx.prisma.user.findUnique({
            where: {
                id: input
            }, 
            select:{
                trips: true
            }
            });
    }})
  .query("getSecretMessage", {
    resolve({ ctx }) {
      return "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.";
    },
  });
