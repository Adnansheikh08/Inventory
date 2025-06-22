import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IceCreamCard from './newCard';
  
const ProductPage = ( {isSidebarOpen} ) => {
  const navigate = useNavigate();
  const [products,setProducts] = useState([])
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate("/loginpage");
    }
    fetch("http://localhost:5050/product/allproducts", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        
      });
  }, []);




  return (
    <>
    <div className={`{transition-all duration-300 p-4 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
      
      {/* Search Form */}
      

      {/* Cards flex */}
      <div className="flex flex-row flex-wrap justify-streach mt-6 space-x-4 space-y-4">
        {products.length > 0 ? (products.map(item => (  // For search functionality
        <IceCreamCard
          key={item.id}
          id={item.id}
          name={item.name}
          manufacturingDate={item.manufacturing_date}
          expiryDate={item.expiry_date}
          imageUrl={item.image_url}
          price={item.price}
          quantity={item.quantity}
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