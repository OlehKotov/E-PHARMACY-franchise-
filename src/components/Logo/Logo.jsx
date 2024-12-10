import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import whiteLogo from './../../assets/images/whiteLogo.png'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import css from "./Logo.module.css";
import clsx from 'clsx';

const Logo = ({ isFooter }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate('/'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div onClick={handleLogoClick} style={{ cursor: 'pointer' }} className={css.logo}>
      <img src={isFooter ? whiteLogo : logo} alt="App Logo" className={css.logoImg}/>
      <p className={clsx(css.logoText, { [css.footerLogoText]: isFooter })}>E-Pharmacy</p>
    </div>
  );
};

export default Logo;