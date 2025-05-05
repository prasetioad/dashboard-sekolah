import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Academic/Dashboard/Dashboard";
import Absensi from "./pages/Academic/Presence/Presensi";
import Rapor from "./pages/Academic/Report/Rapor";
import Layout from "./Layouts/Layout";
import LoginPage from "./pages/Authentication/Login";
import Help from "./pages/Help";
import Setting from "./pages/Setting"
import Profile from "./pages/Authentication/Profile";
import Akademik from "./pages/Academic/Academic/Akademik";
import DashboardAdmission from "./pages/Admission/DashboardRegistration/Index";
import Registration from "./pages/Admission/Registration/Index";
import Screening from "./pages/Admission/Screening/Index";
import ReEnrollment from "./pages/Admission/Re-enrollment/Index";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/" element={<Layout />}>
        {/* Admission */}
        <Route path="dashboard-admission" element={<DashboardAdmission />} />
        <Route path="registration" element={<Registration />} />
        <Route path="screening" element={<Screening />} />
        <Route path="re-enrollment" element={<ReEnrollment />} />

        {/* Academic */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="akademik" element={<Akademik />} />
        <Route path="presensi" element={<Absensi />} />
        <Route path="rapor" element={<Rapor />} />
        <Route path="profile" element={<Profile />} />
        <Route path="pengaturan" element={<Setting />} />
        <Route path="bantuan" element={<Help />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
