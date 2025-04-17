const Topbar = () => {
    return (
      <header className="bg-white border-b p-4 flex justify-end items-center gap-8">
        <div className="text-sm text-gray-600 ">
          <img src="/icons/Notification.svg" alt="Logout" className="bg-biru-light  bg-opacity-20 p-1 rounded-full " />
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/30"
            alt="avatar"
            className="rounded-full"
          />
          <span className="text-sm font-medium">Siti Fatimah</span>
        </div>
        <div>
          <img src="/icons/logout.svg" alt="Logout" className="bg-red  bg-opacity-20 p-1 rounded-full "/>
        </div>
      </header>
    );
  };
  
  export default Topbar;
  