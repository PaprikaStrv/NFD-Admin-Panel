import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "./../../Components/Preloader/Preloader";
import Cities from "./Cities";
import { getCities, getLimitCities } from "./../../Redux/cities-reducer";

const CitiesContainer = ({ getCities, cities }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    // getLimitCities(pageNumber);
    getCities();
  }, [pageNumber]);

  if (!cities || cities.length === 0) {
    return <Preloader />;
  }
  return <Cities {...{ cities, handlePageChange, pageNumber }} />;
};

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
});

export default connect(mapStateToProps, { getCities })(CitiesContainer);
