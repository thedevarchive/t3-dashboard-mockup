// server/routers/_app.ts
import { router } from "../trpc";
import { infoRouter } from "./info";

export const appRouter = router({
  info: infoRouter,
});
