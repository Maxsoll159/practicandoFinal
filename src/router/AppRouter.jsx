import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/login/Login"
import { ProductPage } from "../pages/productPage/ProductPage"
import { Navbar } from "../components/navbar/Navbar"
import { AdminPage } from "../pages/adminPage/AdminPage"
import { AppRouterInetrnas } from "./AppRouterInetrnas"


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/*" element={<AppRouterInetrnas />} />
            </Routes>
        </>
    )
}
