import axios from "axios";

export const ShopApi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/"
})


