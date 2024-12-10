import React from 'react'
import css from "./Footer.module.css";
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <div className={css.footer}>
        <Logo isFooter={true}/>
    </div>
  )
}

export default Footer