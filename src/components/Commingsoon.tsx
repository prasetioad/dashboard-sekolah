import { Clock } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[10vh] text-center px-4 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md p-6">
      <div className="bg-gradient-to-r from-biru-dark to-biru-light p-4 rounded-full shadow-lg mb-4">
        <Clock className="w-10 h-10 text-white animate-pulse" />
      </div>
      <h1 className="text-4xl font-bold text-biru-dark mb-2">Coming Soon</h1>
      <p className="text-gray-600 max-w-md">
        Halaman ini sedang dalam tahap pengembangan. Kami akan segera menghadirkannya untuk Anda!
      </p>
    </div>
  );
};

export default ComingSoon;
