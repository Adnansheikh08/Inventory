import { useState } from "react";
import Sidebar from "../Sidebar";
import LatestProducts from "./LatestProducts";

const ProductLayout = () => {
  const [isSidebarOpens, setIsSidebarOpens] = useState(true);

    const toggleSidebar = () => {
    setIsSidebarOpens((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpens} toggleSidebar={toggleSidebar} />
      <LatestProducts isSidebarOpen={isSidebarOpens} />
    </div>
  )
}

export default ProductLayout
