import react from "react";
import { Switch } from "react-router";
import s from "./content.module.scss";
import notific from "../../Images/Notifications.svg";
import count from "../../Images/Count.svg";
import avatar from "../../Images/Avatar.svg";
import arrow from "../../Images/dropdown_icon.svg";
import linza from "../../Images/linza.svg";
import { ReactSVG } from "react-svg";

const Content = () => {
  return (
    <div className={s.contentWrapper}>
      <header>
        <div className={s.searchWrapper}>
          <div className={s.linzaIconWrapper}>
            <ReactSVG src={linza} />
          </div>

          <input type="text" placeholder="Поиск..." />
        </div>
        <div className={s.notificationWrapper}>
          <ReactSVG src={notific} />
          <ReactSVG src={count} />
        </div>
        <div className={s.adminBlockWrapper}>
          <div>
            <ReactSVG src={avatar} />
          </div>

          <div>Админ</div>
          <div>
            <ReactSVG src={arrow} />
          </div>
        </div>
      </header>
      <Switch></Switch>
      <footer></footer>
    </div>
  );
};

export default Content;
