import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewShopValidationSchema } from "../../validation/addNewShopValidationSchema";
import css from "./CreateShop.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { createShop } from "../../redux/store/storeOps";
import { selectUserEmail } from "../../redux/selectors";

const CreateShop = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addNewShopValidationSchema),
    defaultValues: {
      name: "",
      owner: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      delivery: false,
    },
  });

  useEffect(() => {
    if (userEmail) {
      setValue("email", userEmail);
    }
  }, [userEmail, setValue]);

  const onSubmit = (data) => {
    console.log(data);
    
    dispatch(createShop(data))
    
  };
  return (
    <div className={css.createShopContainer}>
      <h1 className={css.title}>Create your Shop</h1>
      <h2 className={css.subtitle}>
        This information will be displayed publicly so be careful what you
        share.
      </h2>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={css.inputContainer}>
            <div className={css.inputWrapper}>
            <label htmlFor="name" className={css.label}>Shop Name</label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.name ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter shop name"
                    {...field}
                  />
                )}
              />
              {errors.name && (
                <div className={css.error}>{errors.name.message}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
            <label htmlFor="owner" className={css.label}>Shop Owner Name</label>
              <Controller
                name="owner"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.owner ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter Owner name"
                    {...field}
                  />
                )}
              />
              {errors.owner && (
                <div className={css.error}>{errors.owner.message}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
            <label htmlFor="email" className={css.label}>Email address</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.email ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter email address"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <div className={css.error}>{errors.email.message}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
            <label htmlFor="phone" className={css.label}>Phone Number</label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.phone ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter phone address"
                    {...field}
                  />
                )}
              />
              {errors.phone && (
                <div className={css.error}>{errors.phone.message}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
            <label htmlFor="address" className={css.label}>Street address</label>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.address ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter street address"
                    {...field}
                  />
                )}
              />
              {errors.address && (
                <div className={css.error}>{errors.address.message}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
            <label htmlFor="city" className={css.label}>City</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.city ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter city"
                    {...field}
                  />
                )}
              />
              {errors.city && (
                <div className={css.error}>{errors.city.message}</div>
              )}
            </div>

            <div className={css.inputWrapper}>
            <label htmlFor="zip" className={css.label}>Zip / Postal code</label>
              <Controller
                name="zip"
                control={control}
                render={({ field }) => (
                  <input
                    className={`${css.input} ${css.inputText} ${
                      errors.zip ? css.errorInput : ""
                    }`}
                    type="text"
                    placeholder="Enter zip / postal"
                    {...field}
                  />
                )}
              />
              {errors.zip && (
                <div className={css.error}>{errors.zip.message}</div>
              )}
            </div>

            <div className={css.inputWrapperRadio}>
            <label className={css.labelRadio}>Has own Delivery System?</label>
            <Controller
                name="delivery"
                control={control}
                render={({ field }) => (
                  <div className={css.radioGroup}>
                    <div className={css.radioWrapper}>
                      <input
                        id="delivery-yes"
                        type="radio"
                        value={true}
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                      />
                      <label htmlFor="delivery-yes">
                        <svg>
                          <use xlinkHref={`${sprite}#${field.value === true ? 'radioActive' : 'radioNotActive'}`} />
                        </svg>
                        Yes
                      </label>
                    </div>
                    <div className={css.radioWrapper}>
                      <input
                        id="delivery-no"
                        type="radio"
                        value={false}
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
                      />
                      <label htmlFor="delivery-no">
                        <svg>
                          <use xlinkHref={`${sprite}#${field.value === false ? 'radioActive' : 'radioNotActive'}`} />
                        </svg>
                        No
                      </label>
                    </div>
                  </div>
                )}
              />
              {errors.delivery && <div className={css.error}>{errors.delivery.message}</div>}
            </div>

            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              Create account
            </button>
          </div>
        </form>
    </div>
  );
};

export default CreateShop;
