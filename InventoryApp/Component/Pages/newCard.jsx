import React, { useState } from "react";

export default function IceCreamCard({
  id,
  name,
  manufacturingDate,
  expiryDate,
  imageUrl,
  price,
  stock,
  quantity
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Summary Card */}
      <div className="bg-[#F5F5F5] rounded-3xl w-72 p-4 shadow-lg">
        <div className="relative h-44 overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm text-gray-500 mt-1 pb-5">{quantity}</p>
          <p className="text-xs text-gray-400 mt-2">Contains Added Flavouring*</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-700 font-semibold text-base">
             Rs {price}
            </span>
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
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{name}</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <img
                src={imageUrl}
                alt={`${name} detailed`}
                className="rounded-lg w-full h-48 object-contain"
              />
              <ul className="text-gray-700 space-y-2">
                <li><strong>Manufactured:</strong> {manufacturingDate}</li>
                <li><strong>Expiry:</strong> {expiryDate}</li>
                <li><strong>Stock:</strong> {stock} units</li>
              </ul>
              <p className="text-sm text-gray-500">Contains added flavouring*</p>
            </div>

            {/* Footer */}
            <div className="flex justify-end items-center p-4 border-t space-x-3">
              <span className="text-xl font-bold text-blue-700">{price} Rs</span>
              <button
                onClick={() => setOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
