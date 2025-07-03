import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import DeviceLocation from './pages/DeviceLocation'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirect dari root ke dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Route untuk Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Route untuk Device Location */}
          <Route path="/device-location" element={<DeviceLocation />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App