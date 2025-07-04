import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from 'sonner'
import AddProductLayout from "../Component/Pages/AddProductLayout"
import LatestProductLayout from "../Component/Pages/LatestProductLayout"
import LessStockLayout from "../Component/Pages/LessStockLayout"
import LoginPageLayout from "../Component/Pages/LoginPageLayout"
import ProductPageLayout from "../Component/Pages/ProductPageLayout"
import SalesPageLayout from "../Component/Pages/SalesPageLayout"
import SignupPageLayout from "../Component/Pages/SignupPageLayout"
import AdminRoute from "./ProtectedRoutes/AdminRoute"
import UserRoute from "./ProtectedRoutes/UserRoute"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Sidebar/> */}<Toaster position="top-center" richColors/>
      <Routes>

        <Route path="/" element={ <ProductPageLayout/> }/>
        <Route path="/latest-products" element={ <UserRoute> <LatestProductLayout/> </UserRoute> }/>

        <Route path="/login" element={ <LoginPageLayout/> }/>
        <Route path="/signup" element={ <SignupPageLayout/> }/>

        <Route path="/add-product" element={ <AdminRoute> <AddProductLayout/> </AdminRoute> }/>
        <Route path="/less-stock" element={ <AdminRoute> <LessStockLayout/> </AdminRoute> }/>
        <Route path="/sales" element={ <AdminRoute> <SalesPageLayout/> </AdminRoute> }/>

      </Routes>
    </BrowserRouter>
  )
}

export default App