import React, { useState } from "react";

export default function IceCreamCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Summary Card */}
      <div className="bg-[#F5F5F5] rounded-3xl w-72 p-4 shadow-lg">
        <div className="relative h-44 overflow-hidden rounded-2xl">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9dcb5f13833115.56035845a3c87.PNG"
            alt="Mango Ice Cream"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Natural’s Mango Ice‑Cream
          </h2>
          <p className="text-sm text-gray-500 mt-1 pb-5">210 ml</p>
          {/* <ul className="text-sm text-gray-700 mt-2 space-y-1">
            <li>Mfg: <span className="text-gray-800">01 June 2025</span></li>
            <li>Expiry: <span className="text-gray-800">01 September 2025</span></li>
            <li>Stock: <span className="text-gray-800">20 units</span></li>
          </ul> */}
          <p className="text-xs text-gray-400 mt-2">Contains Added Flavouring*</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-blue-700 font-semibold text-base">
              ₹260
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
        <div className="fixed inset-0 z-100 bg-white/30 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">Natural’s Mango Ice‑Cream</h3>
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
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/9dcb5f13833115.56035845a3c87.PNG"
                alt="Mango Ice Cream detailed"
                className="rounded-lg w-full h-48 object-cover"
              />
              <ul className="text-gray-700 space-y-2">
                <li><strong>Size:</strong> 210 ml</li>
                <li><strong>Manufactured:</strong> 01 June 2025</li>
                <li><strong>Expiry:</strong> 01 September 2025</li>
                <li><strong>Stock:</strong> 20 units</li>
              </ul>
              <p className="text-sm text-gray-500">Contains added flavouring*</p>
            </div>
            {/* Footer */}
            <div className="flex justify-end items-center p-4 border-t space-x-3">
              <span className="text-xl font-bold text-blue-700">₹260</span>
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
