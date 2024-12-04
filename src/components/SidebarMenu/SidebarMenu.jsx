import React from "react";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import css from "./SidebarMenu.module.css";

const SidebarMenu = () => {
  return (
    <div className={css.navContainer}>
    <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
    Shop
      </NavLink>
      <NavLink to="/orders" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      Medicine
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      Statistics
      </NavLink>
    </div>
  );
};


export default SidebarMenu;
