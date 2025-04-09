// server/routers/user.ts
//import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { activityData, overviews, userActivityData } from "@/data/infos";

export const infoRouter = router({
  getActivityData: publicProcedure.query(() => {
    return activityData;
  }),
  getUserActivityData: publicProcedure.query(() => {
    return userActivityData;
  }),
  getDashboardOverview: publicProcedure.query(() => {
    return overviews[0];
  }),
});
