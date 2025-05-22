import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();
    return (
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <div>
          <div className="text-xs font-bold w-64">
            <img src="/icons/logo_sma_alkautsar.jpeg" alt="logo_sma_alkautsar" width={'70%'} />
          </div>
        </div>
        <div className="flex justify-end gap-8 items-center">
          <div className="text-sm text-gray-600 ">
            <img src="/icons/Notification.svg" alt="notif" className="bg-blue-light  bg-opacity-20 p-1 rounded-full " />
          </div>
          <div className="flex items-center gap-2" >
            <img
              src="https://i.pravatar.cc/30"
              alt="avatar"
              className="rounded-full"
            />
            <span className="text-sm font-medium">Siti Fatimah</span>
          </div>
          <div onClick={() =>  navigate('/login')} className="text-sm text-gray-600 cursor-pointer">
            <img src="/icons/logout.svg" alt="Logout" className="bg-red  bg-opacity-20 p-1 rounded-full "/>
          </div>
        </div>
      </header>
    );
  };
  
  export default Topbar;
  