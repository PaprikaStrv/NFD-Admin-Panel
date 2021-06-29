import React from "react";
import Paginator from "../../Components/Paginator/Paginator";
import s from "./CarList.module.scss";
import { NavLink } from "react-router-dom";

const CarList = ({ cars, handlePageChange, addCarHandler, isCarAddAcitve }) => {
  const pagesCount = Math.ceil(cars.count / 7);
  return (
    <section>
      <div className={isCarAddAcitve ? s.hideWrapper : null}>
        <div className={s.carListTitle}>Список автомобилей</div>
        <div className={s.carListWrapper}>
          <div className={s.buttonWrapper}>
            <NavLink to="/AddCar">Добавить</NavLink>
          </div>

          <table>
            <thead>
              <tr>
                <th>Модель</th>
                <th>Мин. Цена</th>
                <th className={s.priceMax}>Макс. Цена</th>
                <th className={s.number}>Номер</th>
                <th className={s.category}>Категория</th>
                <th>Изменить</th>
              </tr>
            </thead>
            <tbody>
              {cars.data.map(
                ({ id, name, priceMin, priceMax, number, categoryId }) => (
                  <tr key={id}>
                    <td className={s.carName}>{name ? name : "Name"}</td>
                    <td>{priceMin ? priceMin : "0000"}</td>
                    <td className={s.priceMax}>
                      {priceMax ? priceMax : "9999"}
                    </td>
                    <td className={s.number}>{number ? number : "A111AA"}</td>
                    <td className={s.category}>
                      {categoryId ? categoryId.name : "No Cat"}
                    </td>
                    <td className={s.changeCarBtn}>
                      <NavLink to={`/ChangeCar/${id}`}>Изменить</NavLink>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <Paginator {...{ handlePageChange, pagesCount }} />
        </div>
      </div>
    </section>
  );
};

export default CarList;
