import React from 'react'
import { useState } from 'react';
const AddProduct = ({ isSidebarOpen }) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    stock: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Product data:', product);
    // TODO: send "product" to backend
  };
  return (
    <>
      <div
        className={`transition-all duration-300 p-8 ${isSidebarOpen ? "ml-64" : "ml-16"} flex flex-col justify-center`}
      >
        <div className="min-h-screen bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
          <div className="w-full min-h-screen">
            <h2 className="text-3xl font-bold text-gray-600 mb-6 text-center">
              Add New Product
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
            >
              <div
                className="bg-blue-50 p-4 rounded-t-3xl mb-3"
              >
                <p className="text-center text-gray-600 font-semibold">
                  Fill out the product details below
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter product name"
                    value={product.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="price"
                    className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                  >
                    Price (₹)
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="Enter price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Enter product description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="imageUrl"
                    className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                  >
                    Image URL
                  </label>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    placeholder="https://example.com/product.jpg"
                    value={product.imageUrl}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="stocks"
                    className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                  >
                    Number of Stocks
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    placeholder="200"
                    value={product.stock}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="Manufacturing"
                    className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                  >
                    Manufacturing Date
                  </label>
                  <input
                    id="Manufacturing"
                    name="Manufacturing"
                    type="date"
                    placeholder="DD-MM-YYYY"
                    value={product.Manufacturing}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="Expiry"
                    className="text-gray-600 uppercase tracking-wide text-sm mb-2"
                  >
                    Expiry Date
                  </label>
                  <input
                    id="Expiry"
                    name="Expiry"
                    type="date"
                    placeholder="DD-MM-YYYY"
                    value={product.Expiry}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 hover:shadow-md transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>


  )
}

export default AddProduct
