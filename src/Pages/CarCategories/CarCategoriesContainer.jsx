import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import {
  deleteCarCategory,
  getCarCategories,
} from "../../Redux/carCategory-reducer";
import AddCarCategoryContainer from "./AddCarCategory/AddCarCategoryContainer";
import CarCategories from "./CarCategories";
import ChangeCarCategoryContainer from "./ChangeCarCategory/ChangeCarCategoryContainer";

const CarCategoriesContainer = ({
  getCarCategories,
  carCategories,
  deleteCarCategory,
}) => {
  const [isAddCarCategory, setCarCategoryActive] = useState(false);
  const [isChangeCarCategotyActive, setChangeCarCategoryActive] =
    useState(false);
  const [curCarCategoryId, setCurCarCategoryId] = useState("");

  const handlerAddCarCategory = () => {
    setCarCategoryActive(true);
  };

  const hanlderChangeCarCategory = (id) => {
    setCurCarCategoryId(id);
    setChangeCarCategoryActive(true);
  };

  const handlerDeleteCarCategory = (id) => {
    deleteCarCategory(id);
  };

  useEffect(() => {
    getCarCategories();
  }, []);

  if (!carCategories || carCategories.length === 0) {
    return <Preloader />;
  }

  return (
    <>
      {isAddCarCategory && (
        <AddCarCategoryContainer {...{ setCarCategoryActive }} />
      )}
      {isChangeCarCategotyActive && (
        <ChangeCarCategoryContainer
          {...{ curCarCategoryId, setChangeCarCategoryActive }}
        />
      )}
      <CarCategories
        {...{
          carCategories,
          handlerAddCarCategory,
          isAddCarCategory,
          handlerDeleteCarCategory,
          hanlderChangeCarCategory,
          isChangeCarCategotyActive,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  carCategories: state.carCategories.carCategories,
});

export default connect(mapStateToProps, {
  getCarCategories,
  deleteCarCategory,
})(CarCategoriesContainer);
