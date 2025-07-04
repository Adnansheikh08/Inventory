import { useState } from "react";
import Sidebar from "../Sidebar";
import ActiveAdmin from "./ActiveAdmin";

const ActiveAdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <ActiveAdmin isSidebarOpen={isSidebarOpen} />
    </div>
  )
}

export default ActiveAdminLayout