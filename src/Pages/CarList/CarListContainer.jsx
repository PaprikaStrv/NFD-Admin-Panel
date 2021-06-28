import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getCars } from "../../Redux/cars-reducer";
import CarList from "./CarList";

const CarListContainer = ({ getCars, cars }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  useEffect(() => {
    getCars(pageNumber);
  }, [pageNumber]);

  if (!cars || cars.length === 0) {
    return <Preloader />;
  }
  return <CarList {...{ handlePageChange, cars }} />;
};

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
});

export default connect(mapStateToProps, { getCars })(CarListContainer);
