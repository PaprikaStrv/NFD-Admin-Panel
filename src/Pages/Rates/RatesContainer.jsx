import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getRates } from "../../Redux/rate-reducer";
import Rates from "./Rates";

const RatesContainer = ({ getRates, rates }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    getRates(pageNumber);
  }, [pageNumber]);

  if (!rates || rates.length === 0) {
    return <Preloader/>;
  }

  return <Rates {...{ rates, handlePageChange }} />;
};

const mapStateToProps = (state) => ({
  rates: state.rates.rates,
});

export default connect(mapStateToProps, { getRates })(RatesContainer);
