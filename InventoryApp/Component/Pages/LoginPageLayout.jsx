import { useState } from "react";
import Sidebar from "../Sidebar";
import LoginPage from "./LoginPage";

const LoginPageLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <LoginPage isSidebarOpen={isSidebarOpen} />
    </div>
  )
}

export default LoginPageLayout
