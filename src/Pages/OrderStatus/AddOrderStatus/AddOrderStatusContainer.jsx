import React from "react";
import { connect } from "react-redux";
import AddOrderStatus from "./AddOrderStatus";
import { postOrderStatus } from "./../../../Redux/orderStatus-reducer";

const AddOrderStatusContainer = ({
  setAddOrderStatusActive,
  postOrderStatus,
}) => {
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    postOrderStatus(formData);
  };
  return <AddOrderStatus {...{ setAddOrderStatusActive, onSubmit }} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { postOrderStatus })(
  AddOrderStatusContainer
);
