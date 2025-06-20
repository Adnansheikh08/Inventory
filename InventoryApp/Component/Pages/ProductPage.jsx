import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IceCreamCard from './newCard';
  
const ProductPage = ( {isSidebarOpen} ) => {
  const data = [
  {
    "id": 1,
    "name": "Organic Almond Butter",
    "manufacturing_date": "2025-03-15",
    "expiry_date": "2026-03-15",
    "image_url": "https://th.bing.com/th/id/OPAC.a6inZbVkMGrHug474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",
    "stock": 120
  },
  {
    "id": 2,
    "name": "Whole Wheat Bread",
    "manufacturing_date": "2025-06-10",
    "expiry_date": "2025-06-17",
    "image_url": "https://bing.com/th?id=OSK.9ff9e3a8ef17694b0cf1a96199f0c8ce",
    "stock": 45
  },
  {
    "id": 3,
    "name": "Sparkling Mineral Water – 500ml",
    "manufacturing_date": "2025-05-01",
    "expiry_date": "2027-05-01",
    "image_url": "https://static.winc.com.au/pi/00/b5ca3dc69617b60fa626c0c4027c18e176a15c-3166127/large.jpg",
    "stock": 300
  },
  {
    "id": 4,
    "name": "Greek Yogurt – Strawberry",
    "manufacturing_date": "2025-06-14",
    "expiry_date": "2025-06-21",
    "image_url": "https://th.bing.com/th/id/OIP.z7Yw-j4xfskmIG7Yrkc_OgHaHa?rs=1&pid=ImgDetMain",
    "stock": 78
  },
  {
    "id": 5,
    "name": "Dark Chocolate 70%",
    "manufacturing_date": "2025-04-20",
    "expiry_date": "2026-04-20",
    "image_url": "https://mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&width=1440",
    "stock": 200
  }
]

  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/loginpage");
    }
  },[]);


  // For Search Functionality
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (searchInput.trim() === '') {
      setFilteredData(data); // reset to all items if input is empty
    } else {
      const result = data.filter(item =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(result);
    }
  }, [searchInput]);


  return (
    <>
    <div className={`{transition-all duration-300 p-4 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
      
      {/* Search Form */}
      <div className="w-full max-w-lg">
        <form className="flex"
            onSubmit={(e) => {  // For search functionality
            e.preventDefault();
          }}>

          <label htmlFor="voice-search" className="sr-only">Search</label>

          <div className="relative flex-grow">

            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              {/* Search Icon */}
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.15 5.6h.01…" />
              </svg>
            </div>

            <input
              type="text"
              id="searchInput"
              value={searchInput}  // For search functionality
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Search Mockups, Logos, Templates..."/>

            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3">
              {/* Mic Icon */}
              <svg className="w-4 h-4 text-gray-500 hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3…" />
              </svg>
            </button>

          </div>

          <button
            type="submit"
            className="inline-flex items-center py-2.3 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="23" viewBox="0 0 48 48">
              <path fill="#616161" d="M34.6 28.1H38.6V45.1H34.6z" transform="rotate(-45.001 36.586 36.587)"></path><path fill="#616161" d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"></path><path fill="#37474F" d="M36.2 32.1H40.2V44.400000000000006H36.2z" transform="rotate(-45.001 38.24 38.24)"></path><path fill="#64B5F6" d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"></path><path fill="#BBDEFB" d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"></path>
            </svg>
            Search </button>

        </form>
      </div>

      {/* Cards flex */}
      <div className="flex flex-row flex-wrap justify-streach mt-6 space-x-4 space-y-4">
        {filteredData.length > 0 ? (filteredData.map(item => (  // For search functionality
        <IceCreamCard
          key={item.id}
          id={item.id}
          name={item.name}
          manufacturingDate={item.manufacturing_date}
          expiryDate={item.expiry_date}
          imageUrl={item.image_url}
          stock={item.stock}/>
        ))) : (
                <p className="text-gray-600 text-lg col-span-full">No results found.</p>
              )}
      </div>

    </div>
    </>
  );
}

export default ProductPage