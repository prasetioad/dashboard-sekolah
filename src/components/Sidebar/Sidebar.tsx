import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const menuItems = [
  {label : "Dashboard", icon: '/icons/Dashboard.svg', path:'/dashboard'},
  {label: "Akademik", icon: '/icons/akademik.svg', path:'/akademik'},
  {label: "Presensi", icon: '/icons/user.svg', path:'/presensi'},
  {label: "Rapor", icon: '/icons/erapor.svg', path:'/rapor'},
];

const accountItems = [
  {label : "Profile", icon: '/icons/user.svg', path:'/profile'},
  {label: "Pengaturan", icon: '/icons/setting.svg', path:'/pengaturan'},
  {label: "Bantuan", icon: '/icons/help.svg', path:'/bantuan'},
];

const Sidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r p-4 z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <div className="mb-6 text-xl font-bold">
          <img src="/icons/logo_sma_alkautsar.jpeg" alt="logo_sma_alkautsar" />
        </div>
        <nav className="space-y-2 mb-4">
          <span className="p-4 text-xs">MENU</span>
          {menuItems.map(({ label, icon, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md w-full text-left transition ${
                location.pathname === path
                  ? "bg-gradient-to-r from-biru-dark to-biru-light text-white shadow"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <img src={icon} alt={label} className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <nav className="space-y-2 mb-4">
          <span className="p-4 text-xs">AKUN</span>
          {accountItems.map(({ label, icon, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md w-full text-left transition ${
                location.pathname === path
                  ? "bg-gradient-to-r from-biru-dark to-biru-light text-white shadow"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <img src={icon} alt={label} className="w-5 h-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
