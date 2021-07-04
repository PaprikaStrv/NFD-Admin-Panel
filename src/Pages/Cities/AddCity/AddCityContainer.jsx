import React from "react";
import { connect } from "react-redux";
import { postCity } from "../../../Redux/cities-reducer";
import AddCity from "./AddCity";

const AddCityContainer = ({ setAddCityActive, postCity }) => {
  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.city);
    postCity(formData);
  };
  return <AddCity {...{ setAddCityActive, onSubmit }} />;
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { postCity })(AddCityContainer);
