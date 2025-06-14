import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProduct from '../Component/Pages/AddProduct'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
