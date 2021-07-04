import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "./../../Components/Preloader/Preloader";
import Cities from "./Cities";
import {
  deleteCity,
  getCities,
  getLimitCities,
} from "./../../Redux/cities-reducer";
import AddCityContainer from "./AddCity/AddCityContainer";
import ChangeCityContainer from "./ChangeCity/ChangeCityContainer";

const CitiesContainer = ({ getCities, cities, deleteCity }) => {
  const [isAddCityActive, setAddCityActive] = useState(false);
  const [isChangeCityActive, setChangeCityActive] = useState(false);
  const [curCityId, setCurCityId] = useState("");

  const handlerAddCity = () => {
    setAddCityActive(true);
  };

  const handlerChangeCity = (id) => {
    setCurCityId(id);
    setChangeCityActive(true);
  };

  const handlerDeleteCity = (id) => {
    deleteCity(id);
  };

  useEffect(() => {
    getCities();
  }, []);

  if (!cities || cities.length === 0) {
    return <Preloader />;
  }
  return (
    <>
      {isAddCityActive && <AddCityContainer {...{ setAddCityActive }} />}
      {isChangeCityActive && (
        <ChangeCityContainer {...{ setChangeCityActive, curCityId }} />
      )}
      <Cities
        {...{
          cities,
          handlerAddCity,
          isAddCityActive,
          handlerDeleteCity,
          handlerChangeCity,
          isChangeCityActive,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities.cities,
});

export default connect(mapStateToProps, { getCities, deleteCity })(
  CitiesContainer
);
