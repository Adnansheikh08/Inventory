import { ArrowUpOnSquareStackIcon, BuildingLibraryIcon, HomeIcon, PlusCircleIcon, PowerIcon, ShoppingBagIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isAdmin=false;
    const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`fixed z-10 flex flex-col h-screen bg-[#3E4E88] text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        className="p-2 m-2 bg-[#84A1C4] rounded hover:bg-[#709BCE] focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? "«" : "»"}
      </button>

      <nav className="flex-1 overflow-y-auto mt-4">
        {/* Home */}
        <Link to="/">
        <div
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded"
        >
          <HomeIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Products</span>}
        </div>
        </Link>
        {/* Sales */}
        <Link to="/sales"
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded mt-2"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Sales</span>}
        </Link>

        {/* Add Product */}
        <Link
          to="/add-product"
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded mt-2"
        >
          <PlusCircleIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Add Product</span>}
        </Link>
        {/* Add users */}
        {isAdmin && <Link to="/">
        <div
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded"
        >
          <UsersIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Add Users</span>}
        </div>
        </Link>
        }
        {/* latest product */}
         <Link to="/latest-products">
        <div
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded"
        >
          <ShoppingBagIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Latest Products</span>}
        </div>
        </Link>


        {/* Login/Signup */}
        <Link
          to="/login-signup"
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded mt-2"
        >
          <PlusCircleIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">LogIn/SignUp</span>}
        </Link>


        {/* Add Supplier */}
        {isAdmin && <Link to="/">
        <div
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C] rounded"
        >
          <BuildingLibraryIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Add Supplier</span>}
        </div>
        </Link>
        }
        {/* Admin Panel */}
        {isAdmin && <Link to="/">
        <div
          className="flex items-center px-4 py-2 hover:bg-[#4B5C9C]rounded"
        >
          <PowerIcon className="h-6 w-6" />
          {isOpen &&  <span className="ml-3">Admin Panel</span>}
        </div>
        </Link>
        }
      </nav>
      <div
          className="flex items-center px-4 py-2 hover:bg-[#709BCE] rounded hover:border m-3 mb-4"
        >
          <UsersIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">{isAdmin ? "Admin" : "CommonUser"}</span>}
        </div>
      <div
          className="flex items-center px-4 py-2 hover:bg-[#709BCE] rounded hover:border m-3 mb-4"
        >
          <ArrowUpOnSquareStackIcon className="h-6 w-6" />
          {isOpen && <span className="ml-3">Logout</span>}
        </div>
    </div>
  );
};

export default Sidebar;
