import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import { getCurCity, setCurCity, updateCity } from "./../../../Redux/cities-reducer";
import ChangeCity from "./ChangeCity";

const ChangeCityContainer = ({
  getCurCity,
  setChangeCityActive,
  curCityId,
  curCity,
  updateCity,
  setCurCity
}) => {

  const handlerCancel = () => {
   setCurCity(); 
   setChangeCityActive(false);
  }

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.city);
    updateCity(curCityId, formData);
  };

  useEffect(() => {
    getCurCity(curCityId);
  }, [curCityId]);

  if (!curCity || curCity.length === 0) {
    return <Preloader />;
  }
  return <ChangeCity {...{ curCity, setChangeCityActive, onSubmit, handlerCancel }} />;
};

const mapStateToProps = (state) => ({
  curCity: state.cities.curCity,
});

export default connect(mapStateToProps, { getCurCity, updateCity, setCurCity })(
  ChangeCityContainer
);
