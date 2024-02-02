import { ShopApi } from "../ShopApi";

export const getProducts = async () => {
  const response = await ShopApi.get("/products");
  return response.data;
};
