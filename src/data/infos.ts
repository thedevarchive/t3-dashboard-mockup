// data/users.ts
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
  
  
  