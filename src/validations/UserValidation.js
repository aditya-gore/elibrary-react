import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required().max(50),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(12).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});
