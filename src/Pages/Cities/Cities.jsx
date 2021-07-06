import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./Cities.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import Response from "./../../Components/Response/Response";

const Cities = ({
  cities,
  handlerAddCity,
  isAddCityActive,
  handlerDeleteCity,
  handlerChangeCity,
  isChangeCityActive,
  response,
  closeCityResponse,
}) => {
  return (
    <section className={isAddCityActive || isChangeCityActive ? s.hide : null}>
      {response.length !== 0 && (
        <Response response={response} closeSuccessInfo={closeCityResponse} />
      )}
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddCity} />
        <div className={s.citiesTableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Город</th>
                <th className={s.changeTableColumn}>Изменить</th>
                <th className={s.deleteTableColumn}>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {cities.data.map(({ id, name }) => (
                <tr key={id}>
                  <td>{name ? name : "No Name"}</td>
                  <td className={s.changeTableColumn}>
                    <ChangeEntityButton
                      handlerChangeEntity={handlerChangeCity}
                      id={id}
                    />
                  </td>
                  <td className={s.deleteTableColumn}>
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
