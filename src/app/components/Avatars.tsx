// For the user profile in the sidebar
export const UserAvatar = () => {
    return (
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white text-sm">
          {/* If you have the user's initials: */}
          UN
          {/* Or leave empty for just the circle */}
        </div>
        <div className="ml-3">
          <p className="text-white text-sm">User Name</p>
          <p className="text-gray-400 text-xs">user@example.com</p>
        </div>
      </div>
    );
  };
  
  // For the activity table avatars
export const ActivityAvatar = ({ initials }: { initials: string }) => {
    return (
      <div className="h-5 w-5 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs">
        {initials}
      </div>
    );
  };
  