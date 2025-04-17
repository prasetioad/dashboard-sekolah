import { Home, Book, Users } from "lucide-react"; // sementara pake lucide
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {label : "Dashboard", icon: '/icons/Dashboard.svg', path:'/'},
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
  console.log('location',location);
  
  return (
    <aside className="w-48 bg-white border-r p-4">
      <div className="mb-6 text-xl font-bold"><img src="/icons/LOGO.svg" alt="PENABUR" /></div>
      <nav className="space-y-2 mb-4">
        <span className="p-4 text-xs">MENU</span>
        {menuItems.map(({ label, icon, path }) => (
          <Link
            key={label}
            to={path}
            className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md w-full text-left transition ${location.pathname === path
              ? "bg-gradient-to-r from-biru-dark to-biru-light text-white shadow"
              : "hover:bg-gray-100 text-gray-700"
              }`}
          >
            <img src={icon} alt={label} sizes="18" />
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
            className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md w-full text-left transition ${location.pathname === path
              ? "bg-gradient-to-r from-biru-dark to-biru-light text-white shadow"
              : "hover:bg-gray-100 text-gray-700"
              }`}
          >
            <img src={icon} alt={label} sizes="18" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
