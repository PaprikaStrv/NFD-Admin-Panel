import React from "react";
import s from "./BurderSideBar.module.scss";
import style from "../SideBar/SiderBar.module.scss";
import logo from "../../Images/SmallLogoIcon.svg";
import blogPost from "../../Images/Blog Posts Icon.svg";
import orders from "../../Images/Add New Post Icon.svg";
import menu from "../../Images/Overview (Components) Icon.svg";
import menu1 from "../../Images/Forms & Components Icon.svg";
import person from "../../Images/Person Icon.svg";
import warring from "../../Images/Error Icon.svg";
import pensil from "../../Images/pensil.svg";
import menuBtn from "../../Images/menu_btn.svg";
import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";

const BurgerSideBar = () => {
  return (
    <div className={`${s.burgerSideBar} ${style.sideBarWrapper}`}>
      <div className={style.siderBarLogoWrapper}>
        <ReactSVG src={logo} />
        <div className={style.logoText}>Need for car</div>
      </div>
      <div className={style.linksListWrapper}>
        <ul>
          {4 > 3 ? (
            <li className={style.currentLi}>
              <NavLink to="/">
                <div className={style.iconWrapper}>
                  <ReactSVG src={pensil} />
                </div>

                <div className={style.linkName}>Карточка автомобиля</div>
              </NavLink>
            </li>
          ) : null}

          <li>
            <NavLink to="/">
              <div className={style.iconWrapper}>
                <ReactSVG src={blogPost} />
              </div>

              <div className={style.linkName}>Список авто</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/Orders">
              <div className={style.iconWrapper}>
                <ReactSVG src={orders} />
              </div>

              <div className={style.linkName}>Заказы</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <div className={style.iconWrapper}>
                <ReactSVG src={menu} />
              </div>
              <div className={style.linkName}>Меню 4</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <div className={style.iconWrapper}>
                <ReactSVG src={menu1} />
              </div>
              <div className={style.linkName}>Меню 5</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <div className={style.iconWrapper}>
                <ReactSVG src={person} />
              </div>
              <div className={style.linkName}>Меню 6</div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <div className={style.iconWrapper}>
                <ReactSVG src={warring} />
              </div>
              <div className={style.linkName}>Меню 7</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerSideBar;
