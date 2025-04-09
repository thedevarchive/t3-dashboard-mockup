// server/routers/user.ts
//import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { activityData } from "@/data/infos";

export const cryptoRouter = router({
  getActivityData: publicProcedure.query(() => {
    return activityData;
  }),
});
