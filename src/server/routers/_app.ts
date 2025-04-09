// server/routers/_app.ts
import { router } from "../trpc";
import { cryptoRouter } from "./info";

export const appRouter = router({
  crypto: cryptoRouter,
});
