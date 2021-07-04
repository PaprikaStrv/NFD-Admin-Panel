import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { deletePoint, getPoints } from "../../Redux/points-reducer";
import AddPointContainer from "./AddPoint/AddPointContainer";
import ChangePointContainer from "./ChangePoint/ChangePointContainer";
import Points from "./Points";

const PointsContainer = ({ getPoints, points, deletePoint }) => {
  const [isAddPointActive, setAddPointActive] = useState(false);
  const [isChangePointActive, setChangePointActive] = useState(false);
  const [curPointId, setCurPointId] = useState("");

  useEffect(() => {
    getPoints();
  }, []);

  const handlerAddPoint = () => {
    setAddPointActive(true);
  };

  const handlerChangePoint = (id) => {
    setCurPointId(id);
    setChangePointActive(true);
  };

  const handlerDeletePoint = (id) => {
    deletePoint(id);
  };

  if (!points || points.length === 0) {
    return <Preloader />;
  }

  return (
    <>
      {isAddPointActive && <AddPointContainer {...{ setAddPointActive }} />}
      {isChangePointActive && (
        <ChangePointContainer {...{ setChangePointActive, curPointId }} />
      )}
      <Points
        {...{
          points,
          handlerAddPoint,
          isAddPointActive,
          handlerDeletePoint,
          handlerChangePoint,
          isChangePointActive,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  points: state.points.points,
});

export default connect(mapStateToProps, { getPoints, deletePoint })(
  PointsContainer
);
