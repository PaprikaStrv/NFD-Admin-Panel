import React from "react";
import { Route, Switch } from "react-router";
import s from "./content.module.scss";
import Header from "../ContentHeader/Header";
import Footer from "../ContentFooter/Footer";
import OrderListContainer from "../../Pages/OrderList/OrderListContainer";
import CarListContainer from "./../../Pages/CarList/CarListContainer";
import CarFormContainer from "../../Pages/CarForm/CarFormContainer";

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <Header />
      
      <Switch>
        <Route path="/Orders">
          <OrderListContainer />
        </Route>
        <Route path="/Cars">
          <CarListContainer />
        </Route>
        <Route path="/AddCar">
          <CarFormContainer />
        </Route>
        <Route path="/ChangeCar/:carId">
          <CarFormContainer/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Content;
