import { useState } from "react";
import Sidebar from "../Sidebar";
import LatestProducts from "./LatestProducts";

const LatestProductLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <LatestProducts isSidebarOpen={isSidebarOpen} />
    </div>
  )
}

export default LatestProductLayout