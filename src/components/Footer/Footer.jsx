import React from "react";
import css from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";

const Footer = () => {
  return (
    <div className={css.footerContainer}>
      <div className={css.footerContainerNav}>
        <div className={css.footerLogoContainer}>
          <Logo isFooter={true} />
          <p className={css.footerText}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </div>

        <div className={css.footerLinkContainer}>
          <div className={css.footerNav}>
            <NavLink to="/dashboard" className={css.footerLink}>
              Shop
            </NavLink>
            <NavLink to="/orders" className={css.footerLink}>
              Medicine
            </NavLink>
            <NavLink to="/products" className={css.footerLink}>
              Statistics
            </NavLink>
          </div>

          <ul className={css.footerSocialLink}>
            <li>
              <a href="">
                <svg width="44" height="44">
                  <use xlinkHref={`${sprite}#facebook`} />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg width="44" height="44">
                  <use xlinkHref={`${sprite}#instagram`} />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg width="44" height="44">
                  <use xlinkHref={`${sprite}#youtube`} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className={css.footerLine}></div>
        <ul className={css.footerList}>
          <li className={css.footerItem}>
            © E-Pharmacy 2023. All Rights Reserved
          </li>
          <li className={css.footerItem}>Privacy Policy</li>
          <li className={css.footerItem}>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
