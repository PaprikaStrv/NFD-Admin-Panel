import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";
import s from "./Rates.module.scss";

const Rates = ({
  rates,
  handlePageChange,
  handlerDeleteRate,
  handlerAddRate,
  isAddRateActive,
  handlerChangeRate,
  isChangeRateActive,
}) => {
  return (
    <section className={isAddRateActive || isChangeRateActive ? s.hide : null}>
      <PageTitle title="Тарифы" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddRate} />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th className={s.ratePrice}>Цена</th>
              <th>Изменить</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {rates.data.map(({ id, rateTypeId, price }) => (
              <tr key={id}>
                <td>
                  {rateTypeId.length !== 0 && rateTypeId.name
                    ? rateTypeId.name
                    : "No Name"}
                </td>
                <td className={s.ratePrice}>{price ? price : "No price"}</td>
                <td>
                  <ChangeEntityButton
                    handlerChangeEntity={handlerChangeRate}
                    id={id}
                  />
                </td>
                <td>
                  <DeleteEntityButton
                    handlerDeleteEntity={handlerDeleteRate}
                    id={id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </EntityWrapper>
    </section>
  );
};

export default Rates;
