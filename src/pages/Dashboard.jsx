import React from 'react'
import DashboardCards from '../components/DashboardCards'
import DataTable from '../components/DataTable'

const Dashboard = () => {
  return (
    <div className="bg-gray-100 p-6 h-full">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="flex items-center text-gray-600 mb-4">
          <span className="font-semibold text-gray-800">Dashboard</span>
          <span className="mx-2">/</span>
          <span>Device Location</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar - Dashboard Cards */}
        <div className="w-80 p-6">
          <DashboardCards />
        </div>

        {/* Right Content - Data Table */}
        <div className="flex-1 p-6 pl-0">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard