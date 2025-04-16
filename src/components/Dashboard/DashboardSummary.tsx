import { StatCard } from "./StatCard";
import { BookOpenCheck, Sparkles, MessageSquareQuote } from "lucide-react";

export const DashboardSummary = () => {
  return (
    <div className="grid gap-2 text-gray-500 bg-white shadow rounded-2xl p-2">
      <div className="grid grid-cols-1 md:grid-cols-4 p-2 items-center">
        <span className='text-lg font-bold col-span-3'>Dashboard Wali Kelas</span>
        <span className="text-sm flex justify-end gap-2">Juni 2024 - Juli 2025 <img src="/icons/arrow-down.svg" /></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <StatCard
          icon={<BookOpenCheck className="text-red-500" />}
          label="Capaian Pengetahuan"
          value="76%"
          iconPath="/icons/pengetahuan.svg"
        />
        <StatCard
          icon={<Sparkles className="text-yellow-500" />}
          label="Capaian Keterampilan"
          value="65%"
          iconPath="/icons/keterampilan.svg"
        />
        <StatCard
          icon={<MessageSquareQuote className="text-orange-500" />}
          label="Rekap Penilaian Sikap"
          value="18 Sangat Baik"
          subtext="Baik: 6, Perlu Pembinaan: 2"
          iconPath="/icons/sikap.svg"
        />
      </div>
    </div>
  );
};