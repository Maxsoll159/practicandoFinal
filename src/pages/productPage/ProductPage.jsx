import React from 'react'
import useSWR from 'swr'
import { getProducts } from '../../helpers/products/apiProducts'

export const ProductPage = () => {

    const { data, error, isLoading } = useSWR('/products', getProducts)

    if (error) {
        return <div>Error.....</div>
    }

    if (isLoading) {
        return <div>Cargandooooo...</div>
    }



    return (
        <div>
            <h1>Page Productos</h1>

            {JSON.stringify(data)}


        </div>
    )
}
