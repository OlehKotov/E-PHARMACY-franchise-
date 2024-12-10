import React from "react";
import css from "./SharedLayout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";

const SharedLayout = ({ children }) => {
  const isLogin = useSelector(selectIsLoggedIn)
  return (
    <div className={css.sharedLayoutContainer}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.mainContent}>{children}</div>
      {isLogin && (
        <div className={css.footer}>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default SharedLayout;
