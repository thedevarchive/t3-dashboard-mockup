type DashboardOverview = {
    id: number, 
    totalUsers: number, 
    totalUsersRate: number, 
    newProjects: number, 
    newProjectsRate: number, 
    activeTasks: number, 
    activeTasksRate: number
}

export const overviews: DashboardOverview[] = [
    {id: 1, totalUsers: 4287, totalUsersRate: 12, newProjects: 248, newProjectsRate: 5, activeTasks: 1324, activeTasksRate: -2}
]

type UserActivityItem = {
    id: number, 
    dayOfWeek: string,
    value: number
}

export const userActivityData: UserActivityItem[] = [
    { id: 1, dayOfWeek: 'Mon', value: 30 },
    { id: 2, dayOfWeek: 'Tue', value: 60 },
    { id: 3, dayOfWeek: 'Wed', value: 40 },
    { id: 4, dayOfWeek: 'Thu', value: 90 },
    { id: 5, dayOfWeek: 'Fri', value: 70 },
    { id: 6, dayOfWeek: 'Sat', value: 100 },
    { id: 7, dayOfWeek: 'Sun', value: 120 },
    { id: 8, dayOfWeek: 'Mon', value: 80 },
    { id: 9, dayOfWeek: 'Tue', value: 110 }
  ];

type ActivityItem = {
    id: number;
    user: string;
    action: string;
    time: string;
};

export const activityData: ActivityItem[] = [
    {
        id: 1,
        user: 'John Doe',
        action: 'Created a new project',
        time: '5 min ago'
    },
    {
        id: 2,
        user: 'Sarah Smith',
        action: 'Updated task status',
        time: '12 min ago'
    },
    {
        id: 3,
        user: 'Alex Johnson',
        action: 'Commented on issue #42',
        time: '45 min ago'
    }
];


  
  