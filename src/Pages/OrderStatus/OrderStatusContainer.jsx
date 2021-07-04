import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import {
  deleteOrderStatus,
  getOrderStatus,
} from "../../Redux/orderStatus-reducer";
import AddOrderStatusContainer from "./AddOrderStatus/AddOrderStatusContainer";
import ChangeOrderStatusContainer from "./ChangeOrderStatus/ChangeOrderStatusContainer";
import OrderStauts from "./OrderStatus";

const OrderStatusContainer = ({
  getOrderStatus,
  orderStatus,
  deleteOrderStatus,
}) => {
  const [isAddOrderStatusActive, setAddOrderStatusActive] = useState(false);
  const [isChangeOrderStatusActive, setChangeOrderStatusActive] =
    useState(false);
  const [curOrderStatusId, setCurOrderStatusId] = useState("");

  const handlerAddOrderStatus = () => {
    setAddOrderStatusActive(true);
  };

  const handlerChangeOrderStatus = (id) => {
    setCurOrderStatusId(id);
    setChangeOrderStatusActive(true);
  };

  const handlerDeleteOrderStatus = (id) => {
    deleteOrderStatus(id);
  };

  useEffect(() => {
    getOrderStatus();
  }, []);

  if (!orderStatus || orderStatus.length === 0) {
    return <Preloader />;
  }

  return (
    <>
      {isAddOrderStatusActive && (
        <AddOrderStatusContainer {...{ setAddOrderStatusActive }} />
      )}
      {isChangeOrderStatusActive && (
        <ChangeOrderStatusContainer
          {...{ curOrderStatusId, setChangeOrderStatusActive }}
        />
      )}
      <OrderStauts
        {...{
          orderStatus,
          isAddOrderStatusActive,
          handlerAddOrderStatus,
          handlerDeleteOrderStatus,
          handlerChangeOrderStatus,
          isChangeOrderStatusActive,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  orderStatus: state.orderStatus.orderStatus,
});

export default connect(mapStateToProps, { getOrderStatus, deleteOrderStatus })(
  OrderStatusContainer
);
