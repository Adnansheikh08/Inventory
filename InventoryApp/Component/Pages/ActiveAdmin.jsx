import { TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ActiveAdmin = ( {isSidebarOpen} ) => {
  const [admins, setAdmins] = useState([]);

//   const id = localStorage.getItem(id);

  useEffect(() => {
    axios.get("http://localhost:5050/auth/users")
      .then((res) => setAdmins(res.data))
      .catch((err) => {
        console.error("Failed to fetch admins", err);
        toast.error("Failed to load admin list");
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/auth/users/${id}`);
      setAdmins(prev => prev.filter(admin => admin._id !== id));
      toast.success("Admin deleted");
    } catch (err) {
      toast.error("Failed to delete admin");
    }
  };


  return (
    <section className={`transition-all duration-300 p-4 ${isSidebarOpen ? "ml-64" : "ml-16"} w-full max-w-[1440px] mx-auto bg-[#FAFAFA] h-screen bg-no-repeat bg-cover bg-[url(https://i.pinimg.com/736x/3a/12/14/3a121425d7d35c9fed505d12f2c16c1c.jpg)]`}>
    
      <h1 className="text-center text-2xl font-bold mb-6">Active Admins</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {admins.map(admin => (
          <div key={admin._id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start">

              <div>
                <h2 className="text-lg font-semibold">{admin.name}</h2>
                <p className="text-sm text-gray-500">{admin.email}</p>
              </div>

              <button
                onClick={() => handleDelete(admin._id)}
                className="text-red-600 hover:text-red-800"
                title="Delete Admin">
                <TrashIcon className="w-6 h-6" />
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveAdmin;
