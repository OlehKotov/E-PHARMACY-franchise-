import React from "react";
import css from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={css.footer}>
      <Logo isFooter={true} />
      <p className={css.footerText}>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment.
      </p>
      <div className={css.footerNav}>
        <NavLink
          to="/dashboard"
          className={css.footerLink}
        >
          Shop
        </NavLink>
        <NavLink
          to="/orders"
          className={css.footerLink}
        >
          Medicine
        </NavLink>
        <NavLink
          to="/products"
          className={css.footerLink}
        >
          Statistics
        </NavLink>
      </div>
      <div className={css.footerLine}></div>
      <ul className={css.footerList}>
        <li className={css.footerItem}>© E-Pharmacy 2023. All Rights Reserved</li>
        <li className={css.footerItem}>Privacy Policy</li>
        <li className={css.footerItem}>Terms & Conditions</li>
      </ul>
    </div>
  );
};

export default Footer;
