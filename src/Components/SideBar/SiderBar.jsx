import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import s from "./SiderBar.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../Images/SmallLogoIcon.svg";
import blogPost from "../../Images/Blog Posts Icon.svg";
import orders from "../../Images/Add New Post Icon.svg";
import menu from "../../Images/Overview (Components) Icon.svg";
import menu1 from "../../Images/Forms & Components Icon.svg";
import person from "../../Images/Person Icon.svg";
import warring from "../../Images/Error Icon.svg";
import pensil from "../../Images/pensil.svg";
import menuBtn from "../../Images/menu_btn.svg";
import BurgerSideBar from "../BurgerSideBar/BurgerSideBar";

const SideBar = () => {
  const [isSideBarActive, setSideBarActive] = useState(false);

  const activateSiderBar = () => {
    setSideBarActive(!isSideBarActive);
  };

  return (
    <>
      <div className={s.sideBarBtn} onClick={() => activateSiderBar()}>
        <ReactSVG src={menuBtn} />
      </div>
      {isSideBarActive && <BurgerSideBar />}
      <div className={s.sideBarWrapper}>
        <div className={s.siderBarLogoWrapper}>
          <ReactSVG src={logo} />
          <div className={s.logoText}>Need for car</div>
        </div>
        <div className={s.linksListWrapper}>
          <ul>
            {4 > 3 ? (
              <li className={s.currentLi}>
                <NavLink to="/">
                  <div className={s.iconWrapper}>
                    <ReactSVG src={pensil} />
                  </div>

                  <div className={s.linkName}>Карточка автомобиля</div>
                </NavLink>
              </li>
            ) : null}

            <li>
              <NavLink to="/">
                <div className={s.iconWrapper}>
                  <ReactSVG src={blogPost} />
                </div>

                <div className={s.linkName}>Список авто</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Orders">
                <div className={s.iconWrapper}>
                  <ReactSVG src={orders} />
                </div>

                <div className={s.linkName}>Заказы</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <div className={s.iconWrapper}>
                  <ReactSVG src={menu} />
                </div>
                <div className={s.linkName}>Меню 4</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <div className={s.iconWrapper}>
                  <ReactSVG src={menu1} />
                </div>
                <div className={s.linkName}>Меню 5</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <div className={s.iconWrapper}>
                  <ReactSVG src={person} />
                </div>
                <div className={s.linkName}>Меню 6</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/">
                <div className={s.iconWrapper}>
                  <ReactSVG src={warring} />
                </div>
                <div className={s.linkName}>Меню 7</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideBar;
