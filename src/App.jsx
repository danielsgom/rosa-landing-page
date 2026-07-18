import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import Success from './pages/Success.jsx'
import Cancel from './pages/Cancel.jsx'
import Maintenance from './pages/Maintenance.jsx'

const MAINTENANCE_MODE = true

function App() {
  if (MAINTENANCE_MODE) {
    return (
      <Routes>
        <Route path="*" element={<Maintenance />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  )
}

export default App
