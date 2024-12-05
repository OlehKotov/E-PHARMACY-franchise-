import { useState } from "react";
import css from "./RegisterForm.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/store/storeOps";
import { NavLink } from "react-router-dom";
import { registerValidationSchema } from "../../validation/registerValidationSchema";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(register(data));
  };

  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputWrapper}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                className={`${css.loginInput} ${css.inputText} ${
                  errors.name ? css.errorInput : ""
                }`}
                type="text"
                placeholder="User Name"
                {...field}
              />
            )}
          />
          {errors.name && (
            <div className={css.error}>{errors.name.message}</div>
          )}
        </div>

        <div className={css.inputWrapper}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                className={`${css.loginInput} ${css.inputText} ${
                  errors.email ? css.errorInput : ""
                }`}
                type="text"
                placeholder="Email address"
                {...field}
              />
            )}
          />
          {errors.email && (
            <div className={css.error}>{errors.email.message}</div>
          )}
        </div>

        <div className={css.inputWrapper}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <input
                className={`${css.loginInput} ${css.inputText} ${
                  errors.phoneNumber ? css.errorInput : ""
                }`}
                type="text"
                placeholder="Phone number"
                {...field}
              />
            )}
          />
          {errors.phoneNumber && (
            <div className={css.error}>{errors.phoneNumber.message}</div>
          )}
        </div>

        

        <div className={css.inputWrapper}>
          <div className={css.input}>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  className={`${css.loginInput} ${css.inputText} ${
                    errors.password ? css.errorInput : ""
                  }`}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                />
              )}
            />
            <svg
              className={`${css.passwordToggleIcon} ${
                errors.password ? css.errorIcon : ""
              }`}
              onClick={togglePasswordVisibility}
              width="18px"
              height="18px"
            >
              <use
                xlinkHref={`${sprite}#${showPassword ? "eye" : "eye-off"}`}
              />
            </svg>
          </div>

          {errors.password && (
            <div className={css.error}>{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className={css.button} disabled={isSubmitting}>
        Register
        </button>
        <NavLink to="/login" className={css.isLoginText}>
        Already have an account?
        </NavLink>
      </form>
    </div>
  );
};

export default RegisterForm;