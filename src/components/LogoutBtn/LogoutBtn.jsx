import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import css from "./LogoutBtn.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/store/storeOps";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button className={css.logout} onClick={handleLogout}>
      Log out
    </button>
  );
};

export default LogoutBtn;
