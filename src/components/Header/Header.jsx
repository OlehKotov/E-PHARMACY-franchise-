import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import sprite from "../../assets/icons/sprite.svg";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const menuRef = useRef(null);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(`.${css.burgerButton}`)
    ) {
      closeMenu();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={css.header}>
      <div className={css.container}>
      <Logo />
        {isDesktop &&  isLoggedIn ? (
            <div className={css.navContainer}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `${css.menuItem} ${css.active}` : css.menuItem
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? `${css.menuItem} ${css.active}` : css.menuItem
                }
              >
                Medicine
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? `${css.menuItem} ${css.active}` : css.menuItem
                }
              >
                Statistics
              </NavLink>
            <div className={css.logoutBtn}>
              <LogoutBtn />
            </div>
          </div>
        ) : (
          isLoggedIn && (
          <>
          <button className={css.burgerButton} onClick={toggleMenu}>
            <svg width="32" height="26">
              <use xlinkHref={`${sprite}#menu-burger`} />
            </svg>
          </button>
          <div
              className={`${css.overlay} ${
                isMenuOpen ? css.overlayVisible : ""
              }`}
              onClick={closeMenu}
            />
            <div
              className={`${css.menu} ${isMenuOpen ? css.menuOpen : ""}`}
              ref={menuRef}
            >
              <button className={css.closeButton} onClick={toggleMenu}>
                <svg width="32" height="32">
                  <use xlinkHref={`${sprite}#x`} />
                </svg>
              </button>
              <div className={css.menuContainer}>
                <div className={css.menuContent}>
                <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `${css.menuItem} ${css.active}` : css.menuItem
                }
              >
               Home
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? `${css.menuItem} ${css.active}` : css.menuItem
                }
              >
                Medicine store
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? `${css.menuItem} ${css.active}` : css.menuItem
                }
              >
                Statistics
              </NavLink>
                </div>
                <LogoutBtn />
              </div>
            </div>
          </>
           )
           )}
           </div>
         </header>
       );
     };

export default Header;
