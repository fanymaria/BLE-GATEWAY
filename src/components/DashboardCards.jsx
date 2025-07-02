import React from 'react'

const DashboardCards = () => {
  // Generate the same data as in DataTable
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

  // Count messages by type
  const heartbeatCount = allData.filter(item => item.message_type === 'Heartbeat').length
  const paramReportCount = allData.filter(item => item.message_type === 'Parameter Report').length
  const registrationCount = allData.filter(item => item.message_type === 'Registration').length
  const totalMessages = allData.length

  const dashboardData = [
    { title: 'Heartbeat', value: heartbeatCount.toString(), icon: 'heart' },
    { title: 'Param Report', value: paramReportCount.toString(), icon: 'report' },
    { title: 'Registration', value: registrationCount.toString(), icon: 'registration' },
    { title: 'Total Message', value: totalMessages.toString(), icon: 'message' }
  ]

  const getIcon = (iconType) => {
    const iconMap = {
      'heart': '/asset/image/heartbeat.png',
      'report': '/asset/image/param.png', 
      'registration': '/asset/image/regis.png',
      'message': '/asset/image/total.png'
    }
    
    return (
      <img 
        src={iconMap[iconType]} 
        alt={iconType}
        className="w-12 h-12 object-contain"
        onError={(e) => {
          // Fallback if image fails to load
          e.target.style.display = 'none'
        }}
      />
    )
  }

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {dashboardData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
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