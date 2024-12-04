import React from "react";
import css from "./SharedLayout.module.css";
import Header from "../Header/Header";

const SharedLayout = ({ children, page }) => {
  return (
    <div className={css.sharedLayoutContainer}>
      <div className={css.header}>
        <Header page={page}/>
      </div>
      <div className={css.mainContent}>{children}</div>
    </div>
  );
};

export default SharedLayout;
