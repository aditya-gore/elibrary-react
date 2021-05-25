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

// export const loginSchema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(4).max(12).required(),
// });

// export const emailSchema = yup.object().shape({
//   email: yup.string().email().required(),
// });

// export const passwordSchema = yup.object().shape({
//   password: yup.string().min(4).max(12).required(),
//   confirm_password: yup
//     .string()
//     .oneOf([yup.ref("password"), null])
//     .required(),
// });
