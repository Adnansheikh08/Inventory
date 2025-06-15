import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProduct from '../Component/Pages/AddProduct'
import LatestProducts from "../Component/Pages/LatestProducts"
import LoginSignup from "../Component/Pages/LoginSignup"
import ProductPage from '../Component/Pages/ProductPage'
import SalesPage from '../Component/Pages/SalesPage'
import Sidebar from '../Component/Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<ProductPage/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/sales" element={<SalesPage/>}/>
        <Route path="/latest-products" element={<LatestProducts/>}/>
        <Route path="/login-signup" element={<LoginSignup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
