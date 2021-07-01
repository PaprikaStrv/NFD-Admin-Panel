import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getOrderStatus } from "../../Redux/orderStatus-reducer";
import OrderStauts from "./OrderStatus";

const OrderStatusContainer = ({ getOrderStatus, orderStatus }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    getOrderStatus(pageNumber);
  }, [pageNumber]);

  if (!orderStatus || orderStatus.length === 0) {
    return <Preloader />;
  }

  return <OrderStauts {...{ orderStatus, handlePageChange }} />;
};

const mapStateToProps = (state) => ({
  orderStatus: state.orderStatus.orderStatus,
});

export default connect(mapStateToProps, { getOrderStatus })(
  OrderStatusContainer
);
