import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IceCreamCard from './newCard';
function LatestProduct() {
  const [p, setP] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch("http://localhost:5050/product/latestproducts")
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(data => {
      setP(data);
    })
    .catch(console.error)
    .finally(() => setLoading(false));
}, []);


 if (loading) return <p>Loading…</p>;
if (!p) return <p>No product found.</p>;

return (
 <>
     <div>
       
       {/* Search Form */}
       
 
       {/* Cards flex */}
       <div className="flex flex-row flex-wrap justify-streach mt-6 space-x-4 space-y-4">
         {p.length > 0 ? (p.map(item => (  // For search functionality
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

export default LatestProduct;
