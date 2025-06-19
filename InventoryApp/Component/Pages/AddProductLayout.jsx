import { useState } from 'react';
import Sidebar from "../Sidebar";
import AddProduct from './AddProduct';
const AddProductLayout = () => {
    const [isSidebarOpenz, setIsSidebarOpenz] = useState(true);
    
        const toggleSidebar = () => {
        setIsSidebarOpenz((prev) => !prev);
      };
  return (
    <>
      <Sidebar isOpen={isSidebarOpenz} toggleSidebar={toggleSidebar} />
      <AddProduct isSidebarOpen={isSidebarOpenz} />
    </>
  )
}

export default AddProductLayout
