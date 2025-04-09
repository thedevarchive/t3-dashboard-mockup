"use client";

import { HiMagnifyingGlass } from "react-icons/hi2";
import { ActivityChart } from "./components/ActivityChart";
import { Sidebar } from "./components/Sidebar";

export default function Home() {

  return (
    <div className="flex flex-row min-h-screen max-w-screen-lg mx-auto">
      <div className="flex relative">
        <Sidebar />
      </div>
      <div className="bg-white text-black grid grid-rows-[20px_1fr_20px]">
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
                <p className="text-4xl font-bold mr-2">4,287</p>
                <p className="text-green-600 mt-4">+12%</p>
              </div>
            </div>
            <div className="bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6 w-55 h-30">
              <p className="text-gray-500">New Projects</p>
              <div className="flex flex-row">
                <p className="text-4xl font-bold mr-2">248</p>
                <p className="text-green-600 mt-4">+5%</p>
              </div>
            </div>
            <div className="bg-white outline-2 outline-gray-200 rounded-lg px-8 py-6 w-55 h-30">
              <p className="text-gray-500">Active Tasks</p>
              <div className="flex flex-row">
                <p className="text-4xl font-bold mr-2">248</p>
                <p className="text-green-600 mt-4">+5%</p>
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
              <h2 className="text-2xl font-bold">Recent Activity</h2>
              <ActivityChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
