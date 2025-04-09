// src/app/components/RecentActivity.tsx
import React from 'react';
import { ActivityAvatar } from './Avatars';
import { trpc } from "@/lib/trpc/client";

export const RecentActivity = () => {
    const { data: activityData, isLoading } = trpc.info.getActivityData.useQuery();
  
    if (isLoading) return <div>Loading...</div>;
    
    return (
        <>
            {/* Table Header */}
            <div className="bg-gray-50 rounded-t-md p-3 grid grid-cols-12 text-sm font-medium text-gray-600 w-165">
                <div className="col-span-3">User</div>
                <div className="col-span-6">Action</div>
                <div className="col-span-3 text-right">Time</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
                {activityData?.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 p-3 items-center">
                        <div className="col-span-3 flex items-center">
                            {/* User Avatar Circle */}
                            <ActivityAvatar initials={item.user.split(' ').map(name => name[0]).join('')} />
                            <span className="text-sm text-gray-800 ml-2">{item.user}</span>
                        </div>
                        <div className="col-span-6 text-sm text-gray-800">{item.action}</div>
                        <div className="col-span-3 text-right text-sm text-gray-500">{item.time}</div>
                    </div>
                ))}
            </div>
        </>
    );
};