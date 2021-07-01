import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { getPoints } from "../../Redux/points-reducer";
import Points from "./Points";

const PointsContainer = ({ getPoints, points }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected + 1);
  };
  useEffect(() => {
    getPoints(pageNumber);
  }, [pageNumber]);

  if (!points || points.length === 0) {
    return <Preloader {...{ handlePageChange, points }} />;
  }

  return (
    <Points {...{points, handlePageChange}}/>
  );
};

const mapStateToProps = (state) => ({
  points: state.points.points,
});

export default connect(mapStateToProps, { getPoints })(PointsContainer);
