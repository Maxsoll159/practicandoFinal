import { ShopApi } from "../ShopApi";

export const authUser = async (body) => {
  try {
    const response = await ShopApi.post("/auth/login", body);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const authSession = async (token) => {
  try {
    const response = await ShopApi.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
