import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getCarCategories } from "../../Redux/carCategory-reducer";
import CarCategories from './CarCategories';

const CarCategoriesContainer = ({ getCarCategories, carCategories }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    getCarCategories(pageNumber);
  }, [pageNumber]);

  if (!carCategories || carCategories.length === 0) {
    return <Preloader/>;
  }

  return <CarCategories {...{ carCategories, handlePageChange }} />;
};

const mapStateToProps = (state) => ({
  carCategories: state.carCategories.carCategories,
});

export default connect(mapStateToProps, { getCarCategories })(CarCategoriesContainer);
