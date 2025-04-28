import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Absensi from "./pages/Presensi";
import Rapor from "./pages/Rapor";
import Layout from "./Layouts/Layout";
import LoginPage from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="akademik" element={<Dashboard />} />
        <Route path="presensi" element={<Absensi />} />
        <Route path="rapor" element={<Rapor />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
