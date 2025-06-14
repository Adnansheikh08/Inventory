
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
