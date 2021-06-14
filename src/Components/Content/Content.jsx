import React from "react";
import { Route, Switch } from "react-router";
import s from "./content.module.scss";
import Header from "../ContentHeader/Header";
import Footer from "../ContentFooter/Footer";
import OrderListContainer from "../../Pages/OrderList/OrderListContainer";

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Header />
      <Switch>
        <Route path="/Orders">
          <OrderListContainer />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Content;
