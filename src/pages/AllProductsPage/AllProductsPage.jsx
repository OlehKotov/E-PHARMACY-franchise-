import React, { useEffect } from "react";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter";
import { useDispatch } from "react-redux";
import css from "./AllProductsPage.module.css";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Products from "../../components/Products/Products";
import { filterProductsByName } from "../../redux/store/storeOps";
import { setCurrentPage } from "../../redux/store/storeSlice";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const pageTitle = "All products";

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(filterProductsByName(""));
  }, [dispatch]);

  const filterOrders = (name) => {
    dispatch(setCurrentPage(1));
    dispatch(filterProductsByName(name));
  };

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All products</DocumentTitle>
        <main className={css.mainContainer}>
          <UserNameFilter filterAction={filterOrders} />
          <Products />
        </main>
      </div>
    </SharedLayout>
  );
};

export default AllProductsPage;
