import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./Points.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";

const Points = ({
  points,
  handlerAddPoint,
  isAddPointActive,
  handlerDeletePoint,
  handlerChangePoint,
  isChangePointActive,
}) => {
  return (
    <section
      className={isAddPointActive || isChangePointActive ? s.hide : null}
    >
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddPoint} />
        <div className={s.pointsTableWrapper}>
          {" "}
          <table>
            <thead>
              <tr>
                <th className={s.pointName}>Название</th>
                <th>Адрес</th>
                <th className={s.pointCity}>Город</th>
                <th>Изменить</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {points.data.map(({ id, name, address, cityId }) => (
                <tr key={id}>
                  <td className={s.pointName}>{name ? name : "No Name"}</td>
                  <td>{address ? address : "No address"}</td>
                  <td className={s.pointCity}>
                    {cityId.length !== 0 && cityId.name
                      ? cityId.name
                      : "No City"}
                  </td>
                  <td>
                    <ChangeEntityButton
                      handlerChangeEntity={handlerChangePoint}
                      id={id}
                    />
                  </td>
                  <td>
                    <DeleteEntityButton
                      handlerDeleteEntity={handlerDeletePoint}
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

export default Points;
