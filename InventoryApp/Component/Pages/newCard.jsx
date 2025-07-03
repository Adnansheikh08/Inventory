import { useState } from "react";

export default function IceCreamCard({
  id,
  name,
  manufacturingDate,
  expiryDate,
  imageUrl,
  price,
  stock: initialStock,
  description = "...",
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const [stock, setStock] = useState(initialStock);
  const [isEditing, setIsEditing] = useState(false);
  const [newStock, setNewStock] = useState(initialStock);
  const role = localStorage.getItem("role");

  const saveStock = async () => {
    if (newStock < 0 || isNaN(newStock)) {
      alert("Stock must be 0 or greater");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5050/product/${id}/stock`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock: newStock }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const updated = await res.json();
      setStock(updated.stock);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update stock");
    }
  };

  return (
    <>
      {/* Summary Card */}
      <div className="bg-[#F5F5F5] hover:shadow-2xl  rounded-3xl w-72 p-4 shadow-lg">
        <div className="relative h-44 overflow-hidden rounded-2xl">
          <img src={imageUrl} alt={name} className="object-contain w-full h-full" />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-700">{name}</h2>
          <p className="text-sm text-gray-500 mt-1 pb-5">{description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-700 font-semibold">Rs {price}</span>
            <button
              onClick={() => setOpen(true)}
              className="bg-white border border-blue-600 text-blue-600 px-4 py-1 rounded-full hover:bg-blue-50 transition shadow-sm hover:shadow"
            >
              View more
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-100 bg-white/30 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{name}</h3>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600">
                &times;
              </button>
            </div>

            <div className="p-6 space-y-4">
              <img src={imageUrl} alt={`${name}`} className="rounded-lg w-full h-48 object-contain" />
              <ul className="text-gray-700 space-y-2">
                <li><strong>Manufactured:</strong> {manufacturingDate}</li>
                <li><strong>Expiry:</strong> {expiryDate}</li>
                <li>
                  <strong>Stock:</strong>{" "}
                  {isEditing ? (
                    <input
                      type="number"
                      min="0"
                      value={newStock}
                      onChange={e => setNewStock(Number(e.target.value))}
                      className="border rounded w-20 px-2 py-1"
                    />
                  ) : (
                    `${stock} units`
                  )}
                </li>
              </ul>
              <p className="text-sm text-gray-500">Contains added flavouring*</p>
            </div>

            <div className="flex justify-evenly items-center p-4 border-t space-x-3">
              {role === "admin" && (
                <>
                  {isEditing ? (
                    <button
                      onClick={saveStock}
                      className="bg-[#709BCE] text-white px-4 py-2 rounded-full hover:bg-[#3E4E88] transition"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => { setIsEditing(true); setNewStock(stock); }}
                      className="bg-[#709BCE] text-white px-4 py-2 rounded-full hover:bg-[#3E4E88] transition"
                    >
                      Edit Stock
                    </button>
                  )}
                  <button
                    onClick={() => onDelete(id)}
                    className="bg-[#709BCE] text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </>
              )}
              <button
                onClick={() => setOpen(false)}
                className="bg-[#709BCE] text-white px-4 py-2 rounded-full hover:bg-[#3E4E88] transition"
              >
                Close
              </button>
              <span className="text-xl font-bold text-blue-700">Rs {price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
