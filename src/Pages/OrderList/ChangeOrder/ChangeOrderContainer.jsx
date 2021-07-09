import React, { useEffect } from "react";
import { connect } from "react-redux";
import ChangeOrder from "./ChangeOrder";
import { getOrder } from "./../../../Redux/order-reducer";
import Preloader from "./../../../Components/Preloader/Preloader";
import { getCities } from "../../../Redux/cities-reducer";
import { getPoints } from "../../../Redux/points-reducer";
import { getOrderStatus } from "../../../Redux/orderStatus-reducer";
import { getRates } from "../../../Redux/rate-reducer";

const ChangeOrderContainer = ({
  getOrder,
  getCities,
  getPoints,
  getRates,
  getOrderStatus,
  curOrderId,
  setOrderChangeActive,
  order,
  cities,
  points,
  orderStatus,
  rates,
}) => {
  useEffect(() => {
    getOrder(curOrderId);
    getCities();
    getPoints();
    getOrderStatus();
    getRates();
  }, [curOrderId]);

  if (
    !order ||
    order.length === 0 ||
    !cities ||
    cities.length === 0 ||
    !points ||
    points.length === 0 ||
    !orderStatus ||
    orderStatus.length === 0 ||
    !rates ||
    rates.length === 0
  ) {
    return <Preloader />;
  }
  return <ChangeOrder {...{ order, cities, points, orderStatus, rates, setOrderChangeActive }} />;
};

const mapStateToProps = (state) => ({
  order: state.order.order,
  cities: state.cities.cities,
  points: state.points.points,
  orderStatus: state.orderStatus.orderStatus,
  rates: state.rates.rates,
});

export default connect(mapStateToProps, {
  getOrder,
  getCities,
  getPoints,
  getOrderStatus,
  getRates,
})(ChangeOrderContainer);
