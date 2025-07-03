import React from 'react'
import { UserCheck } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const menuItems = [
    { label: 'Dashboard', to: '/dashboard', icon: (
      <div className="grid grid-cols-2 gap-1 mr-2">
        <div className="w-2 h-2 bg-white rounded-sm"></div>
        <div className="w-2 h-2 bg-white rounded-sm"></div>
        <div className="w-2 h-2 bg-white rounded-sm"></div>
        <div className="w-2 h-2 bg-white rounded-sm"></div>
      </div>
    ) },
    { label: 'Device Location', to: '/device-location', icon: <UserCheck className="w-5 h-5 mr-2" /> },
    { label: 'Device Management', to: '/device-management', icon: null }
  ]

  return (
    <div className="w-full bg-blue-700 text-white flex justify-between items-center px-6 py-4 sticky top-0 z-50">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold leading-tight">BLE</h1>
        <h2 className="text-2xl font-bold leading-tight">Gateway</h2>
      </div>

      {/* Menu */}
      <nav className="flex space-x-6">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <div className={`flex items-center px-4 py-2 rounded ${
              location.pathname === item.to
                ? 'bg-blue-800 border-b-2 border-blue-400'
                : 'hover:bg-blue-600'
            }`}>
              {item.icon}
              <span className="text-white font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
