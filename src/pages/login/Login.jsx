import React from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema } from './schema/ValidateLogin'
import { yupResolver } from "@hookform/resolvers/yup"
import useSWR from 'swr'
import { authUser } from '../../helpers/user/apiUser'
import { useNavigate } from 'react-router-dom'



export const Login = () => {
    const navigation = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema)
    })


    const onSubmit = (data) => {
        authUser(data).then((res)=>{
            if(res.statusCode === 401){
                alert("ERROR AL INICIAR SESION")
            }else{
                localStorage.setItem("token", res.access_token)
                navigation("/admin")
            }
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="">Usuario</label>
                <input {...register("email")} placeholder='Usuario' />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input {...register("password")} placeholder='**********' type='password' />
                <p>{errors.password?.message}</p>
            </div>
            <button>Ingresar</button>
        </form>
    )
}
