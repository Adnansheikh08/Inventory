import { HomeIcon, PlusCircleIcon, PowerIcon, ShoppingBagIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  // const isAdmin = true;
  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [role, setRole] = useState(() => localStorage.getItem("role") || "user");

  // const switchToAdmin = () => {
  //   setRole("admin");
  //   localStorage.setItem("role", "admin");
  //   toast.success("Switched to Admin Panel");
  // };

  const switchToUser = () => {
    setRole("user");
    localStorage.setItem("role", "user");
    toast.success("Switched to User Panel");
  };


  useEffect(() => {
    // listen for storage changes in other tabs (optional)
    const onStorage = (e) => {
      if (e.key === 'name') setName(e.newValue || '');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    setTimeout(() => {
      navigate('/loginpage');
    }, 1000);
    toast.success('Logged off');

    // Delay navigation by 1 second (1000 ms)

  };



  return (
    <div className={`fixed z-10 flex flex-col h-screen bg-[#3E4E88] text-white transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
      <button className="p-2 m-2 bg-[#84A1C4] rounded hover:bg-[#709BCE] focus:outline-none" onClick={toggleSidebar}> {isOpen ? "«" : "»"}
      </button>

      <nav className="flex-1 overflow-y-auto mt-4">

        {/* User Panel */}

        {role === "user" && (
          <>
            <Link to="/">
              <div className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded">
                <HomeIcon className="h-6 w-6" />
                {isOpen && <span className="ml-3">Products</span>}
              </div>
            </Link>

            <Link to="/latest-products">
              <div className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded">
                <ShoppingBagIcon className="h-6 w-6" />
                {isOpen && <span className="ml-3">Latest Products</span>}
              </div>
            </Link>



            <Link to="/login" className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded">
              {/* onClick={switchToAdmin}> */}
              <UsersIcon className="h-6 w-6" />
              {isOpen && <span className="ml-3">Admin Login</span>}
            </Link>

          </>
        )}


        {/* Admin Panel */}

        {role === "admin" && (
          <>
            <Link to="/add-product" className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded mt-2">
              <PlusCircleIcon className="h-6 w-6" />
              {isOpen && <span className="ml-3"> Add Product </span>}
            </Link>

            <Link to="/less-stock">
              <div className="text-red-500 flex items-center animate-blink px-4 py-2 hover:bg-[#4B5C9C] rounded">
                <ShoppingBagIcon className="h-6 w-6" />
                {isOpen && <span className="ml-3"> LESS STOCK </span>}
              </div>
            </Link>

            <Link to="/sales">
              <div className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded">
                <ShoppingCartIcon className="h-6 w-6" />
                {isOpen && <span className="ml-3">Sales</span>}
              </div>
            </Link>


            <Link to="/" className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded"
              onClick={switchToUser}>
              <PowerIcon className="h-6 w-6" />
              {isOpen && <span className="ml-3">Switch To User</span>}
            </Link>
          </>

        )}

      </nav>

      {/* Name and Logout */}
      {role === "admin" && (
        <div className="flex flex-col">

          <div className="flex px-2 mb-1 h-10 items-center rounded hover:bg-[#4B5C9C]">
            <UsersIcon className="h-6 w-6 mx-2" />
            {isOpen && <span className="">{name}</span>}
          </div>

          <Link to="/" className="flex items-center px-4 py-2 mb-5 hover:bg-[#4B5C9C] rounded"
            onClick={switchToUser}>
            <PowerIcon className="h-6 w-6" />
            {isOpen && <span className="ml-3">Logout</span>}
          </Link>

        </div>
      )}


    </div>
  );
};

export default Sidebar;

/*

*/