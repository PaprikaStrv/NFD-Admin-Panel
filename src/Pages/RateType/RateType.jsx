import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./RateType.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";

const RateType = ({
  rateType,
  handlePageChange,
  isAddRatyTypeActive,
  handlerAddRateType,
  handlerDeleteRateType,
  handlerChangeRateType,
  isChangeRateTypeActive,
}) => {
  return (
    <section
      className={isAddRatyTypeActive || isChangeRateTypeActive ? s.hide : null}
    >
      <PageTitle title="Типы тарифов" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddRateType} />
        <div className={s.rateTypeTableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th className={s.rateTypeUnit}>Ед. измерения</th>
                <th>Изменить</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {rateType.data.map(({ id, unit, name }) => (
                <tr key={id}>
                  <td>{name ? name : "No Name"}</td>
                  <td className={s.rateTypeUnit}>{unit ? unit : "No unit"}</td>
                  <td>
                    <ChangeEntityButton
                      handlerChangeEntity={handlerChangeRateType}
                      id={id}
                    />
                  </td>
                  <td>
                    <DeleteEntityButton
                      handlerDeleteEntity={handlerDeleteRateType}
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

export default RateType;
