import { UserAvatar } from "./Avatars";

const NavItem = ({ label, isActive }: {label: string, isActive: boolean}) => {
    return (
      <div className={`flex items-center mx-1 px-1 py-4 rounded-md ${isActive ? 'bg-blue-500' : ''}`}>
        <div className={`ml-2 h-3 w-3 rounded-full ${isActive ? 'bg-white' : 'bg-gray-400'}`}>
          {/* This is the dot */}
        </div>
        <span className={`ml-4 ${isActive ? 'text-white' : 'text-gray-400'}`}>
          {label}
        </span>
      </div>
    );
  };
  
  // Then in your sidebar component:
export const Sidebar = () => {
    return (
      <div className="bg-gray-800 h-auto w-[250px] p-2">
        {/* Logo area */}
        <div className="mx-4 my-2 p-4 rounded-lg bg-gray-700 mb-10">
          <h1 className="text-white font-bold text-xl text-center">T3 Dashboard</h1>
        </div>
        
        {/* Navigation items */}
        <nav className="mt-6 ml-2 text-xl">
          <NavItem label="Dashboard" isActive={true} />
          <NavItem label="Analytics" isActive={false} />
          <NavItem label="Projects" isActive={false} />
          <NavItem label="Settings" isActive={false} />
        </nav>
        
        {/* User profile at bottom */}
        <div className="absolute bottom-4 left-4 right-4 p-3 bg-gray-700 rounded-md w-50">
          <UserAvatar />
        </div>
      </div>
    );
  };