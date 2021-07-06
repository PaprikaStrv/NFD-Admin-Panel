import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getCars } from "../../Redux/cars-reducer";
import CarList from "./CarList";
import { setResponse } from './../../Redux/cars-reducer';

const CarListContainer = ({ getCars, cars, response }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  const closeCarResponse = () => {
    setResponse("");
    window.location.reload();
  }

  useEffect(() => {
    getCars(pageNumber);
  }, [pageNumber]);

  if (!cars || cars.length === 0) {
    return <Preloader />;
  }
  return <CarList {...{ handlePageChange, cars, response, closeCarResponse }} />;
};

const mapStateToProps = (state) => ({
  cars: state.cars.cars,
  response: state.cars.response,
});

export default connect(mapStateToProps, { getCars })(CarListContainer);
