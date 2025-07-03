import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const DeviceLocation = () => {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div className="bg-gray-100 p-6 h-full">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-gray-600 mb-4">
          <span>Dashboard</span>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-800">Device Location</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-blue-600">Device Location</h1>
        </div>

        {/* Map Container */}
        <div className="p-6 h-full">
          <div className="relative h-full bg-gray-50 rounded-lg overflow-hidden">
            {/* Map Placeholder - akan diganti dengan real map nanti */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50">
              {/* Zoom Controls */}
              <div className="absolute top-4 left-4 z-10 bg-white rounded shadow-md">
                <button className="block w-8 h-8 flex items-center justify-center border-b border-gray-200 hover:bg-gray-50">
                  <span className="text-lg font-bold text-gray-600">+</span>
                </button>
                <button className="block w-8 h-8 flex items-center justify-center hover:bg-gray-50">
                  <span className="text-lg font-bold text-gray-600">−</span>
                </button>
              </div>

              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-transparent">
                {/* Simulasi peta dengan beberapa marker */}
                <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-green-500 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-lg transform translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Overlay text untuk development */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-6 rounded-lg shadow-lg text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Map</h3>
                    <p className="text-gray-600 mb-4">Device locations akan ditampilkan di sini</p>
                    <div className="text-sm text-gray-500">
                      <p>🔴 Active Device</p>
                      <p>🟢 Standby Device</p>
                      <p>🔵 Offline Device</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attribution */}
              <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
                © OpenStreetMap contributors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceLocation