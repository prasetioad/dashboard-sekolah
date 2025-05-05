import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar";

const Layout = () => {
  const name = localStorage.getItem('name')
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-gray-200">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </main>
        {name == 'admisi' &&
          <div className="w-14 bg-white-200 p-2">
            {/* <Sidebar position="right" /> */}p
          </div>
        }
      </div>
    </div>
  );
};

export default Layout;