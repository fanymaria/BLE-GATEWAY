import React from 'react'
import { UserCheck } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">BLE</h1>
        <h2 className="text-2xl font-bold">Gateway</h2>
      </div>
      
      <nav className="mt-8">
        <div className="px-6 py-3 bg-blue-700 border-r-4 border-blue-400">
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-1 mr-3">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <span className="text-white font-medium">Dashboard</span>
          </div>
        </div>
        
        <div className="px-6 py-3 hover:bg-blue-700 cursor-pointer">
          <div className="flex items-center">
            <UserCheck className="w-5 h-5 mr-3" />
            <span className="text-white font-medium">Device Location</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar