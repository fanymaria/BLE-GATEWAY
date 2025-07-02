import React, { useState } from 'react'
import { Calendar, Download, ChevronLeft, ChevronRight } from 'lucide-react'

const DataTable = () => {
  const [messageType, setMessageType] = useState('All Message Type')
  const [startDate, setStartDate] = useState('23/04/2025')
  const [endDate, setEndDate] = useState('23/04/2025')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Generate 50 sample data entries
  const generateTableData = () => {
    const messageTypes = ['Heartbeat', 'Parameter Report', 'Registration']
    const states = ['33800000', '33800001', '33800002', '33800003']
    const data = []

    for (let i = 1; i <= 50; i++) {
      const messageTypeRandom = messageTypes[Math.floor(Math.random() * messageTypes.length)]
      const stateRandom = states[Math.floor(Math.random() * states.length)]
      const batteryVoltage = (21.5 + Math.random() * 1.0).toFixed(1)
      const batteryLevel = Math.floor(85 + Math.random() * 15)
      const bleRxCount = Math.floor(1000 + Math.random() * 9000)
      const param16 = messageTypeRandom === 'Parameter Report' ? Math.floor(50000 + Math.random() * 50000) : '-'
      const param242 = Math.random() > 0.8 ? Math.floor(100 + Math.random() * 900) : '-'

      data.push({
        no: i,
        message_type: messageTypeRandom,
        state: stateRandom,
        battery_voltage: batteryVoltage,
        battery_level: batteryLevel.toString(),
        ble_rx_count: bleRxCount.toString(),
        param_16: param16.toString(),
        param_242: param242.toString()
      })
    }
    return data
  }

  const allData = generateTableData()
  
  // Filter data based on message type
  const filteredData = messageType === 'All Message Type' 
    ? allData 
    : allData.filter(item => item.message_type === messageType)

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = filteredData.slice(startIndex, endIndex)

  // Reset to page 1 when filter changes
  React.useEffect(() => {
    setCurrentPage(1)
  }, [messageType])

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

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxVisiblePages = 5
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-3 py-2 rounded-md border transition-colors ${
            currentPage === i ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      )
    }

    return buttons
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

        {/* Data Summary */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} entries
          {messageType !== 'All Message Type' && (
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">
              Filtered by: {messageType}
            </span>
          )}
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
            {currentData.map((row, index) => (
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
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {renderPaginationButtons()}
            
            <button 
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTable