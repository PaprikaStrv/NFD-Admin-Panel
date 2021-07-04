import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { deleteRateType, getRateType } from "../../Redux/rateType-reducer";
import RateType from "./RateType";
import AddRateTypeContainer from "./AddRateType/AddRateTypeContainer";
import ChangeRateTypeContainer from "./ChangeRateType/ChangeRateTypeContainer";

const RateTypeContainer = ({ getRateType, rateType, deleteRateType }) => {
  const [isAddRatyTypeActive, setAddRateTypeActive] = useState(false);
  const [isChangeRateTypeActive, setChangeRateTypeActive] = useState(false);
  const [curRateTypeId, setCurRateTypeId] = useState("");

  const handlerAddRateType = () => {
    setAddRateTypeActive(true);
  };

  const handlerChangeRateType = (id) => {
    setCurRateTypeId(id);
    setChangeRateTypeActive(true);
  };

  const handlerDeleteRateType = (id) => {
    deleteRateType(id);
  };

  useEffect(() => {
    getRateType();
  }, []);

  if (!rateType || rateType.length === 0) {
    return <Preloader />;
  }

  return (
    <>
      {isAddRatyTypeActive && (
        <AddRateTypeContainer {...{ setAddRateTypeActive }} />
      )}
      {isChangeRateTypeActive && (
        <ChangeRateTypeContainer
          {...{ curRateTypeId, setChangeRateTypeActive }}
        />
      )}
      <RateType
        {...{
          rateType,
          isAddRatyTypeActive,
          handlerAddRateType,
          handlerDeleteRateType,
          handlerChangeRateType,
          isChangeRateTypeActive,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  rateType: state.rateType.rateType,
});

export default connect(mapStateToProps, { getRateType, deleteRateType })(
  RateTypeContainer
);
