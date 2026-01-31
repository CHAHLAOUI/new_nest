import { NavLink } from "react-router-dom";
import { Home as HomeIcon, Compass as ExploreIcon, LogOut as LogoutIcon,
        MessageCircle as ChatIcon, User as UserIcon } from "lucide-react";  
import type { ReactNode } from "react";

const mockData: { user: { id: string; name: string; email: string, image: string; username: string } } = {
    user: {
        id: '1',
        name: 'Mohamed Atlhs',
        username: 'moait-la',
        image: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'
    }
};

function StatisticItem({item, value} : {item: string; value: number}) {
    return (
        <div className="flex flex-col items-center ">
            <p className="font-bold text-lg text-gray-200">{value}</p>
            <p className="font-lg text-gray-400">{item}</p>
        </div>
    );
}

function ProfileStatistics({activities, keepers, keepingup} : {activities: number; keepers: number; keepingup: number}) {
    return (
        <div className="flex gap-3 mt-5">
            <StatisticItem item="activities" value={activities} />
            <StatisticItem item="keepers" value={keepers} />
            <StatisticItem item="keeping up" value={keepingup} />
        </div>
    );
}

function NavItem({name, to, icon} : {name: string; to: string; icon: React.ReactNode}) {
    return (
        <NavLink to={to} className={({isActive} : {isActive: boolean}) => (
            `flex items-center gap-3 p-3 rounded-xl mt-2 text-lg
            hover:bg-[#262626] text-gray-200 
            ${isActive ? 'bg-[#FFC107]/50 text-white hover:bg-[#FFC107]/50' : ''}`
        )}>
            {icon}
            {name}
        </NavLink>
    );
}

export default function Sidebar() {
    return (
        <>
            <aside className="hidden fixed md:flex flex-col h-screen w-[270px] bg-[#121212] text-white border-r border-gray-700">
                <div className="flex flex-col items-center">
                    <img 
                        src={mockData.user.image} 
                        alt="profile image"
                        className="w-28 h-28 rounded-full object-cover mx-auto mt-10 mb-2 border-[2px] border-[#FFC107]/50 p-1"
                    />

                    <p className="text-xl font-semibold text-gray-200">{mockData.user.name}</p>
                    <p className="text-lg text-gray-400">@{mockData.user.username}</p>

                    <ProfileStatistics activities={8} keepers={400} keepingup={30} />
                    {/* <div className="h-[1px] bg-gray-600 w-[80%] mt-4" />  */}

                    <nav className="w-[90%] flex flex-col gap-2 mt-2 border-t-[1px] border-gray-600 pt-5">
                        <NavItem name="Home" to="/" icon={<HomeIcon />} />
                        <NavItem name="Explore" to="/explore" icon={<ExploreIcon />} />
                        <NavItem name="Chat" to="/chat" icon={<ChatIcon />} />
                        <NavItem name="Profile" to="/profile" icon={<UserIcon />} />
                    </nav>

                </div>

                <div className="mt-auto mb-5 px-5">
                    <NavItem name="Logout" to="/logout" icon={<LogoutIcon />} />
                </div>

            </aside>
        </>
    );
}
