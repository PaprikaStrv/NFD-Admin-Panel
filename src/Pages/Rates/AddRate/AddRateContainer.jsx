import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../../Components/Preloader/Preloader";
import { getRates } from "../../../Redux/rate-reducer";
import AddRate from "./AddRate";
import { postRate } from "./../../../Redux/rate-reducer";

const AddRateContainer = ({ getRates, setAddRateActive, rates, postRate }) => {
  const [curRate, setCurRate] = useState();
  const [isRateTouched, setRateTouched] = useState(false);

  const handlerPutRate = (value) => {
    setRateTouched(true);
    setCurRate(value);
  };
  const onSubmit = (values) => {
    if (values.price && curRate) {
      const formData = new FormData();
      formData.append("price", parseInt(values.price));
      formData.append("rateTypeId[id]", curRate);
      postRate(formData);
    } else {
      setRateTouched(true);
    }
  };

  useEffect(() => {
    getRates();
  }, []);

  if (!rates || rates.length === 0) {
    return <Preloader />;
  }
  return (
    <AddRate
      {...{
        onSubmit,
        curRate,
        isRateTouched,
        rates,
        setAddRateActive,
        setRateTouched,
        handlerPutRate,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  rates: state.rates.rates,
});

export default connect(mapStateToProps, { getRates, postRate })(
  AddRateContainer
);
