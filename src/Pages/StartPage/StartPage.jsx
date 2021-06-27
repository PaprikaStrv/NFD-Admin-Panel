import React from "react";
import LoginFormContainer from "./../../Components/LoginForm/LoginFormContainer";
import Cookies from "js-cookie";
import AdminPage from "../AdminPage/AdminPage";
import { tokenExpire } from "./../../helpers/constants";
import { refreshToken } from "../../Redux/login-reducer";
import { connect } from "react-redux";

const StartPage = ({ refreshToken }) => {
  if (new Date(new Date().getTime()) >= tokenExpire) {
    refreshToken();
  }
  

  return (
    <div>
      {Cookies.get("userToken") ? <AdminPage /> : <LoginFormContainer />}
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { refreshToken })(StartPage);
