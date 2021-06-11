import React from "react";
import Cookies from "js-cookie";
import SideBar from "../../Components/SideBar/SiderBar";
import Content from "../../Components/Content/Content";
import s from "./adminPage.module.scss";

const AdminPage = () => {
  // const handlerOut = () => {
  //    Cookies.remove('userToken')
  //    window.location.reload();
  // }
  return (
    <div className={s.adminPageWrapper}>
      <SideBar />
      <Content />
    </div>
  );
};

export default AdminPage;
