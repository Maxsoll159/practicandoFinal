import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "../context/AppContext"
import { Navigate } from "react-router-dom"


export const RouterPrinvate = ({ children }) => {
    const [loading, setLoading] = useState(true) 
    const { user } = useContext(UsuarioContext)

    console.log(user)

    return !user.statusCode ? children : <Navigate to="/login" />;
}
