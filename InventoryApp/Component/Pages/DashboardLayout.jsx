import { useState } from "react";
import Sidebar from "../Sidebar";
import ProductPage from "./ProductPage";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ProductPage isSidebarOpen={isSidebarOpen} />
      {/* <div className="content">
        <Outlet />
      </div> */}
    </div>
  )
}

export default DashboardLayout
