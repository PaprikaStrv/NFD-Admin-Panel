import React from "react";
import { connect } from "react-redux";
import CarForm from "./CarForm";

const CarFormContainer = ({ setCarAddActive }) => {
  return <CarForm {...{ setCarAddActive }} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(CarFormContainer);
