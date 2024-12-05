import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^\+380\d{9}$/,
      "Invalid phone number format. It should be +380XXXXXXXXX"
    )
    .required("Phone number is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters long")
    .required("Password is required"),
});