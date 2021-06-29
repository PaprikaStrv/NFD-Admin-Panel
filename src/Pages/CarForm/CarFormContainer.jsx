import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategory } from "../../Redux/cars-reducer";
import CarForm from "./CarForm";
import Preloader from "./../../Components/Preloader/Preloader";

const CarFormContainer = ({ getCategory, category }) => {
  useEffect(() => {
    getCategory();
  }, []);
  if (!category || category.length === 0) {
    return <Preloader />;
  }
  return <CarForm {...{ category }} />;
};

const mapStateToProps = (state) => ({
  category: state.cars.category,
});

export default connect(mapStateToProps, { getCategory })(CarFormContainer);
