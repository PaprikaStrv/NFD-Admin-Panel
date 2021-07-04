import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./Cities.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";

const Cities = ({
  cities,
  handlerAddCity,
  isAddCityActive,
  handlerDeleteCity,
  handlerChangeCity,
  isChangeCityActive
}) => {
  return (
    <section className={isAddCityActive || isChangeCityActive ? s.hide : null}>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddCity} />
        <div className={s.citiesTableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Город</th>
                <th>Изменить</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {cities.data.map(({ id, name }) => (
                <tr key={id}>
                  <td>{name ? name : "No Name"}</td>
                  <td>
                    <ChangeEntityButton
                      handlerChangeEntity={handlerChangeCity}
                      id={id}
                    />
                  </td>
                  <td>
                    <DeleteEntityButton
                      handlerDeleteEntity={handlerDeleteCity}
                      id={id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </EntityWrapper>
    </section>
  );
};

export default Cities;
