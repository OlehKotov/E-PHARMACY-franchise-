import React from "react";
import css from "./LoginPage.module.css";
import LoginForm from "./../../components/LoginForm/LoginForm";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SharedLayout from "../../components/SharedLayout/SharedLayout";

const LoginPage = () => {
  return (
    <SharedLayout>
      <DocumentTitle>Login page</DocumentTitle>
      <div className={css.container}>
        <div className={css.textBlockWrap}>
          <div className={css.textBlock}>
            <h1 className={css.textBlockHeader}>
              Your medication, delivered Say goodbye to all{" "}
              <span>your healthcare</span> worries with us
            </h1>
            <div className={css.textBlockImg}></div>
          </div>
          <LoginForm />
        </div>
      </div>
    </SharedLayout>
  );
};

export default LoginPage;
