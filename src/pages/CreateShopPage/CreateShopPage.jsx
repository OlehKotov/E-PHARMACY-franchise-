import React from "react";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import css from "./CreateShopPage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import CreateShop from "../../components/CreateShop/CreateShop";

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
          <CreateShop />
          <div className={css.image}></div>
        </main>
      </div>
    </SharedLayout>
  );
};

export default CreateShopPage;
