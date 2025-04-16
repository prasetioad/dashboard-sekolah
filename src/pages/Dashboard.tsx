import { DashboardSummary } from "../components/Dashboard/DashboardSummary";
import PresenceRing from "../components/Dashboard/PresenceRing";
import Announcement from "../components/Dashboard/Announcement";
import BarChartKD from "../components/Dashboard/BarChartKD";
import StudentsTable from "../components/Dashboard/StudentsTable";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 w-full">
      {/* Kiri */}
      <div className="xl:col-span-3 space-y-4"> 
        <DashboardSummary />
        <BarChartKD />
        <StudentsTable />
      </div>

      {/* Kanan */}
      <div className="space-y-4">
        <PresenceRing />
        <Announcement />
      </div>
    </div>
  );
}