import React from 'react'

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
