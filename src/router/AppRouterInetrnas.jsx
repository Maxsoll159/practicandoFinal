import { Route, Routes } from "react-router-dom"
import { AdminPage } from "../pages/adminPage/AdminPage"
import { RouterPrinvate } from "./RouterPrinvate"


export const AppRouterInetrnas = () => {
    return (
        <RouterPrinvate>
            <Routes>
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </RouterPrinvate>
    )
}