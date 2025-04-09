"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { ActivityChart } from "./components/ActivityChart";
import { Sidebar } from "./components/Sidebar";
import { RecentActivity } from "./components/RecentActivity";
import { StackLabels } from "./components/StackLabels";

import { trpc } from "@/lib/trpc/client";
import { useEffect, useState } from "react";
import { formatRate } from "@/lib/formatters";

export default function Home() {
  const [totalUsersRate, setTotalUsersRate] = useState(0);
  const [newProjectsRate, setNewProjectsRate] = useState(0);
  const [activeTasksRate, setActiveTasksRate] = useState(0);

  const { data: overview, isLoading } = trpc.info.getDashboardOverview.useQuery();

  useEffect(() => {
    if(overview) {
      setActiveTasksRate(overview.activeTasksRate); 
      setNewProjectsRate(overview.newProjectsRate); 
      setTotalUsersRate(overview.totalUsersRate); 
    }
  }, [overview]); 

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-row min-h-screen max-w-screen-lg mx-auto">
      <div className="flex relative">
        <Sidebar />
      </div>
      <div className="relative bg-white text-black grid grid-rows-[20px_1fr_20px]">
        <div className="flex items-center justify-between p-10 mt-3">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <div className="relative">
            <input className="px-8 py-3 rounded-lg w-65 bg-gray-50" placeholder="Search..." />
            <button className="absolute -translate-x-4/3 -translate-y-1 py-3 rounded-lg bg-transparent text-gray-500"><HiMagnifyingGlass size={35} /></button>
          </div>
        </div>
        <main className="flex flex-col gap-[32px] items-center sm:items-start bg-gray-50 mt-20 px-10 py-6">
          <div className="flex flex-row items-center gap-8">
            <div className="bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6 w-55 h-30">
              <p className="text-gray-500">Total Users</p>
              <div className="flex flex-row">
                <p className="text-4xl font-bold mr-2">{overview?.totalUsers.toLocaleString()}</p>
                <p className={`${totalUsersRate !== 0 ? (totalUsersRate > 0 ? "text-green-600" : "text-red-600") : "text-black"} mt-4`}>{formatRate(totalUsersRate)}</p>
              </div>
            </div>
            <div className="bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6 w-55 h-30">
              <p className="text-gray-500">New Projects</p>
              <div className="flex flex-row">
                <p className="text-4xl font-bold mr-2">{overview?.newProjects.toLocaleString()}</p>
                <p className={`${newProjectsRate !== 0 ? (newProjectsRate > 0 ? "text-green-600" : "text-red-600") : "text-black"} mt-4`}>{formatRate(newProjectsRate)}</p>
              </div>
            </div>
            <div className="bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6 w-55 h-30">
              <p className="text-gray-500">Active Tasks</p>
              <div className="flex flex-row">
                <p className="text-4xl font-bold mr-2">{overview?.activeTasks.toLocaleString()}</p>
                <p className={`${activeTasksRate !== 0 ? (activeTasksRate > 0 ? "text-green-600" : "text-red-600") : "text-black"} mt-4`}>{formatRate(activeTasksRate)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-col bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6">
              <h2 className="text-2xl font-bold">User Activity</h2>
              <ActivityChart />
            </div>
          </div>
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-col bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6">
              <h2 className="text-2xl font-bold mb-2">Recent Activity</h2>
              <RecentActivity />
            </div>
          </div>
        </main>
        <StackLabels />
      </div>
    </div>
  );
}
