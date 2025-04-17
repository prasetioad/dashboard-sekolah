import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Absensi from './pages/Presensi'
import Rapor from './pages/Rapor'
import Layout from './Layouts/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Dashboard/></Layout>} /> 
      <Route path="/akademik" element={<Layout><Dashboard/></Layout>} />
      <Route path="/presensi" element={<Layout><Absensi /> </Layout>} />
      <Route path="/rapor" element={<Layout><Rapor /></Layout>} />
    </Routes>
  )
}

export default App
