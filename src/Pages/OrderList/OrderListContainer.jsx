import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import OrderList from "./OrderList";
import { getOrderList } from "./../../Redux/order-reducer";
import Preloader from "./../../Components/Preloader/Preloader";

const OrderListContainer = ({ getOrderList, orderList, response }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    getOrderList(pageNumber);
  }, [pageNumber]);

  if (!orderList || orderList.length === 0) {
    return <Preloader />;
  }
  return <OrderList {...{ orderList, response, handlePageChange }} />;
};

const mapStateToProps = (state) => ({
  orderList: state.order.orders,
  response: state.order.response,
});

export default connect(mapStateToProps, { getOrderList })(OrderListContainer);
