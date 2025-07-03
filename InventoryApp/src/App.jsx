import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from 'sonner'
import AddProductLayout from "../Component/Pages/AddProductLayout"
import DashboardLayout from "../Component/Pages/DashboardLayout"
import LessStockLayout from "../Component/Pages/LessStockLayout"
import LoginPageLayout from "../Component/Pages/LoginPageLayout"
import ProductLayout from "../Component/Pages/ProductLayout"
import SalesPageLayout from "../Component/Pages/SalesPageLayout"
import SignupPageLayout from "../Component/Pages/SignupPageLayout"
import AdminRoute from "./ProtectedRoutes/AdminRoute"
import UserRoute from "./ProtectedRoutes/UserRoute"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar/> */}<Toaster position="top-center" richColors/>
      <Routes>

        <Route path="/" element={
           <UserRoute>
             <DashboardLayout />
           </UserRoute>
         }/>
       
         <Route path="/sales" element={
           <AdminRoute>
             <SalesPageLayout />
           </AdminRoute>
         }/>
       
         <Route path="/latest-products" element={
           <UserRoute>
             <ProductLayout />
           </UserRoute>
         }/>

        <Route path="/login" element={<LoginPageLayout/>}/>
        <Route path="/signup" element={<SignupPageLayout/>}/>

        <Route path="/add-product" element={
          <AdminRoute>
            <AddProductLayout/>
            </AdminRoute>
          }/>

        <Route path="/less-stock" element={
          <AdminRoute>
          <LessStockLayout/>
          </AdminRoute>
          }/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
