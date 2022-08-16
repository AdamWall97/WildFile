// src/server/router/index.ts
import { createRouter } from "./context";
import {userProtectedRouter} from "./user";
import superjson from "superjson";

import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.",userProtectedRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
