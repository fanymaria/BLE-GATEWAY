import React from 'react'
import { FileText, UserCheck, Mail } from 'lucide-react'

const DashboardCards = () => {
  const dashboardData = [
    { title: 'Heartbeat', value: '80', icon: 'heart' },
    { title: 'Param Report', value: '80', icon: 'report' },
    { title: 'Registration', value: '80', icon: 'registration' },
    { title: 'Total Message', value: '240', icon: 'message' }
  ]

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'heart':
        return (
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        )
      case 'report':
        return <FileText className="w-8 h-8 text-gray-400" />
      case 'registration':
        return <UserCheck className="w-8 h-8 text-gray-400" />
      case 'message':
        return <Mail className="w-8 h-8 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {dashboardData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">{item.title}</p>
              <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
            </div>
            <div className="text-2xl opacity-70">
              {getIcon(item.icon)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards