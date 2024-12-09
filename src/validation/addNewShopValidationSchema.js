import * as yup from "yup";

export const addNewShopValidationSchema = yup.object().shape({
  name: yup.string().required("Shop name is required"),
  owner: yup.string().required("Shop owner is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("Zip is required"),
  delivery: yup.boolean().required("Delivery is required"),

});