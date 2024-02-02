import { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import { authSession } from "../helpers/user/apiUser";
import { Navigate } from "react-router-dom";

export const UsuarioContext = createContext()

export const AppContext = ({ children }) => {
    const [user, setUser] = useState({});
    const token = localStorage.getItem("token");

    const { data } = useSWR(`/auth/profile${token}`, () => authSession(token));

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data]);

    return (
        <UsuarioContext.Provider value={{ user }}>
            {children}
        </UsuarioContext.Provider>
    )
}