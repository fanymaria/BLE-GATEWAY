import React, { useState } from 'react'
import { Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react'

const DataTable = () => {
  const [messageType, setMessageType] = useState('All Message Type')
  const [startDate, setStartDate] = useState('23/04/2025')
  const [endDate, setEndDate] = useState('23/04/2025')
  const [currentPage, setCurrentPage] = useState(4)

  const tableData = [
    {
      no: 1,
      message_type: 'Heartbeat',
      state: '33800000',
      battery_voltage: '21.8',
      battery_level: '100',
      ble_rx_count: '1234',
      param_16: '-',
      param_242: '-'
    },
    {
      no: 2,
      message_type: 'Parameter Report',
      state: '33800000',
      battery_voltage: '21.9',
      battery_level: '98',
      ble_rx_count: '2345',
      param_16: '69840',
      param_242: '-'
    },
    {
      no: 3,
      message_type: 'Registration',
      state: '33800001',
      battery_voltage: '22.0',
      battery_level: '95',
      ble_rx_count: '4523',
      param_16: '-',
      param_242: '-'
    },
    {
      no: 4,
      message_type: 'Heartbeat',
      state: '33800000',
      battery_voltage: '21.9',
      battery_level: '100',
      ble_rx_count: '5678',
      param_16: '-',
      param_242: '-'
    },
    {
      no: 5,
      message_type: 'Registration',
      state: '33800001',
      battery_voltage: '22.0',
      battery_level: '100',
      ble_rx_count: '4567',
      param_16: '-',
      param_242: '-'
    }
  ]

  const handleFilter = () => {
    console.log('Filter clicked:', messageType)
  }

  const handleDateFilter = () => {
    console.log('Date filter clicked:', startDate, endDate)
  }

  const handleResetDate = () => {
    setStartDate('')
    setEndDate('')
  }

  const handleExport = () => {
    console.log('Export to Excel clicked')
    // Implement export functionality here
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-blue-600">Data Decoded</h3>
          <button 
            onClick={handleExport}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Ekspor Excel
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Message Type</label>
            <select 
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Message Type</option>
              <option>Heartbeat</option>
              <option>Parameter Report</option>
              <option>Registration</option>
            </select>
            <button 
              onClick={handleFilter}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              Filter
            </button>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <label className="text-sm text-gray-600">Start Date</label>
            <div className="relative">
              <input 
                type="text" 
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="dd/mm/yyyy"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            <label className="text-sm text-gray-600">End Date</label>
            <div className="relative">
              <input 
                type="text" 
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="dd/mm/yyyy"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Calendar className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            <button 
              onClick={handleDateFilter}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              Filter Date
            </button>
            <button 
              onClick={handleResetDate}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
              Reset Date
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-blue-600">No</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">message_type</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">state</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">battery_voltage</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">battery_level</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">ble_rx_count</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">param_16</th>
              <th className="text-left p-4 text-sm font-medium text-blue-600">param_242</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 text-sm text-gray-800">{row.no}</td>
                <td className="p-4 text-sm text-gray-600">{row.message_type}</td>
                <td className="p-4 text-sm text-gray-800">{row.state}</td>
                <td className="p-4 text-sm text-gray-800">{row.battery_voltage}</td>
                <td className="p-4 text-sm text-gray-800">{row.battery_level}</td>
                <td className="p-4 text-sm text-gray-800">{row.ble_rx_count}</td>
                <td className="p-4 text-sm text-gray-800">{row.param_16}</td>
                <td className="p-4 text-sm text-gray-800">{row.param_242}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-end gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-2 rounded-md border transition-colors ${
              currentPage === 1 ? 'bg-blue-600 text-white' : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            1
          </button>
          <button 
            onClick={() => setCurrentPage(3)}
            className={`px-3 py-2 rounded-md border transition-colors ${
              currentPage === 3 ? 'bg-blue-600 text-white' : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            3
          </button>
          <button 
            onClick={() => setCurrentPage(4)}
            className={`px-3 py-2 rounded-md border transition-colors ${
              currentPage === 4 ? 'bg-blue-600 text-white' : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            4
          </button>
          <button 
            onClick={() => setCurrentPage(5)}
            className={`px-3 py-2 rounded-md border transition-colors ${
              currentPage === 5 ? 'bg-blue-600 text-white' : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            5
          </button>
          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataTable