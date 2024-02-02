import * as yup from "yup";
export let loginSchema = yup.object({
  email: yup.string().email("El campo debe ser un email").required("El campo es requerido"),
  password: yup.string().required("El campo es requerido")
});
