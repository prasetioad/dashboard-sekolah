import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Absensi from "./pages/Presensi";
import Rapor from "./pages/Rapor";
import Layout from "./Layouts/Layout";
import LoginPage from "./pages/Login";
import Help from "./pages/Help";
import Setting from "./pages/Setting"
import Profile from "./pages/Profile";
import Akademik from "./pages/Akademik";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/" element={<Layout />}>
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
