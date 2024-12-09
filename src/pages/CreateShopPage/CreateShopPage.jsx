import React, { useEffect } from "react";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import css from "./CreateShopPage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Statistics from "../../components/Statistics/Statistics";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import { useDispatch, useSelector } from "react-redux";
import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";
import { getDashboard } from "../../redux/store/storeOps";
import { selectIsLoading } from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";

const CreateShopPage = () => {
  // const loading = useSelector(selectIsLoading);
  // const dispatch = useDispatch();
  // const pageTitle = "Dashboard";

  // useEffect(() => {
  //   dispatch(getDashboard());
  // }, [dispatch]);

  // if (loading) {
  //   return (
  //     <SharedLayout page={pageTitle}>
  //     <div className={css.container}>
  //       <DocumentTitle>Dashboard</DocumentTitle>
  //       <Loader />
  //     </div>
  //   </SharedLayout>
  //   );
  // }

  return (
    <SharedLayout>
      <div className={css.container}>
        <DocumentTitle>Create Shop</DocumentTitle>
        <main className={css.mainContainer}>

         
        </main>
      </div>
    </SharedLayout>
  );
};

export default CreateShopPage;
