import React from 'react'
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Sidebar from '../Component/Sidebar'
import ProductPage from '../Component/Pages/ProductPage'
import AddProduct from '../Component/Pages/AddProduct'
import SalesPage from '../Component/Pages/SalesPage'
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/sales" element={<SalesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
