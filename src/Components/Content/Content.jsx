import react, { useState } from "react";
import { Switch } from "react-router";
import s from "./content.module.scss";
import notific from "../../Images/Notifications.svg";
import count from "../../Images/Count.svg";
import avatar from "../../Images/Avatar.svg";
import arrow from "../../Images/dropdown_icon.svg";
import linza from "../../Images/linza.svg";
import { ReactSVG } from "react-svg";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";

const Content = () => {
  const [isLogoutActive, setLogoutActive] = useState(false);

  const handlerAdminPanel = () => {
    setLogoutActive(!isLogoutActive);
  };

  const handlerLogOut = () => {
    Cookies.remove("userToken");
    window.location.reload();
  };
  return (
    <div className={s.contentWrapper}>
      <header>
        <div className={s.searchWrapper}>
          <div className={s.linzaIconWrapper}>
            <ReactSVG src={linza} />
          </div>

          <input type="text" placeholder="Поиск ..." />
        </div>
        <div className={s.notificationWrapper}>
          <ReactSVG src={notific} />
          <div className={s.countNotification}>
            <ReactSVG src={count} />
          </div>
        </div>
        <div
          className={s.adminBlockWrapper}
          onClick={() => handlerAdminPanel()}
        >
          {isLogoutActive && (
            <div className={s.logOutWrapper}>
              <button onClick={() => handlerLogOut()}>Выйти</button>
            </div>
          )}
          <div className={s.adminAvatar}>
            <ReactSVG src={avatar} />
          </div>

          <div className={s.adminName}>Admin</div>
          <div>
            <ReactSVG src={arrow} />
          </div>
        </div>
      </header>
      <Switch></Switch>
      <footer>
        <div className={s.footerContainer}>
          <div>
            <NavLink to="/">Главная страница</NavLink>
            <NavLink to="/">Ссылка</NavLink>
          </div>

          <div className={s.coopyRightText}>Copyright © 2020 Simbirsoft</div>
        </div>
      </footer>
    </div>
  );
};

export default Content;
