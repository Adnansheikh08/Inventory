import React from 'react'
import Sidebar from "../Sidebar";
import { useState } from 'react';
import AddProduct from './AddProduct';
const AddProductLayout = () => {
    const [isSidebarOpens, setIsSidebarOpens] = useState(true);
    
        const toggleSidebar = () => {
        setIsSidebarOpens((prev) => !prev);
      };
  return (
    <>
      <Sidebar isOpen={isSidebarOpens} toggleSidebar={toggleSidebar} />
      <AddProduct isSidebarOpen={isSidebarOpens} />
    </>
  )
}

export default AddProductLayout
