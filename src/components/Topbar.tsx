const Topbar = () => {
    return (
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">14 Mei 2025</div>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/30"
            alt="avatar"
            className="rounded-full"
          />
          <span className="text-sm font-medium">Siti Fatimah</span>
        </div>
      </header>
    );
  };
  
  export default Topbar;
  