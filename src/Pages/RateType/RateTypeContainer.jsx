import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getRateType } from "../../Redux/rateType-reducer";
import RateType from "./RateType";

const RateTypeContainer = ({ getRateType, rateType }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    getRateType(pageNumber);
  }, [pageNumber]);

  if (!rateType || rateType.length === 0) {
    return <Preloader/>;
  }

  return <RateType {...{ rateType, handlePageChange }} />;
};

const mapStateToProps = (state) => ({
  rateType: state.rateType.rateType,
});

export default connect(mapStateToProps, { getRateType })(RateTypeContainer);
