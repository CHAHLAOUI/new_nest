import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() { 
    return (
        <>
            <Sidebar />
            <div className="md:pl-[280px] flex flex-col bg-[#121212] min-h-screen">
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </div>
       </>
    );
}
