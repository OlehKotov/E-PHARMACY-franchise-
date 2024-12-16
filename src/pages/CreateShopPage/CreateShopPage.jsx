import React from "react";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import css from "./CreateShopPage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import CreateShop from "../../components/CreateShop/CreateShop";

const CreateShopPage = () => {

  return (
    <SharedLayout>
      <div className={css.container}>
        <DocumentTitle>Create Shop</DocumentTitle>
        <main className={css.mainContainer}>
          <CreateShop />
          <div className={css.image}></div>
        </main>
      </div>
    </SharedLayout>
  );
};

export default CreateShopPage;
