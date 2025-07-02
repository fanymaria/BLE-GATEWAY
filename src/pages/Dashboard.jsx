import React from 'react'
import DashboardCards from '../components/DashboardCards'
import DataTable from '../components/DataTable'

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center text-gray-600 mb-4">
          <span className="font-semibold text-gray-800">Dashboard</span>
          <span className="mx-2">/</span>
          <span>Device Location</span>
        </div>
      </div>

      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Data Table */}
      <DataTable />
    </div>
  )
}

export default Dashboard