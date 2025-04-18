import { ReactNode } from "react";

export const StatCard = ({
  label,
  value,
  subtext,
  iconPath
}: {
  label: string;
  value: string;
  subtext?: string;
  iconPath:string;
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center space-x-4">
      <div className=" p-2 rounded-full">
        <img src={iconPath} alt={`${label} icon`} className="w-10 h-10" />
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-xl font-bold text-gray-800">{value}</div>
        {subtext && <div className="text-xs text-gray-400">{subtext}</div>}
      </div>
    </div>
  );
};