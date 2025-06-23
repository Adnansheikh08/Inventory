import { useState } from 'react';
import Sidebar from "../Sidebar";
import AddProduct from './AddProduct';
const AddProductLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
        const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
      };
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <AddProduct isSidebarOpen={isSidebarOpen} />
    </>
  )
}

export default AddProductLayout
