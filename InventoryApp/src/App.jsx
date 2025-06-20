import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from 'sonner'
import AddProductLayout from "../Component/Pages/AddProductLayout"
import DashboardLayout from "../Component/Pages/DashboardLayout"
import LoginPage from "../Component/Pages/LoginPage"
import ProductLayout from "../Component/Pages/ProductLayout"
import SalesPage from '../Component/Pages/SalesPage'
import SignupPage from "../Component/Pages/SignupPage"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar/> */}<Toaster position="top-center" richColors/>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/add-product" element={<AddProductLayout/>}/>
        <Route path="/sales" element={<SalesPage/>}/>
        <Route path="/latest-products" element={<ProductLayout/>}/>
        <Route path="/loginpage" element={<LoginPage/>}/>
        <Route path="/signuppage" element={<SignupPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
