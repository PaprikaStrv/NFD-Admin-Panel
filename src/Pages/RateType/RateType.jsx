import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "../../Components/Paginator/Paginator";

const RateType = ({ rateType, handlePageChange }) => {
  const pagesCount = Math.ceil(rateType.count / 6);
  return (
    <section>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Ед. измерения</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {rateType.data.map(({ id, unit, name }) => (
              <tr key={id}>
                <td>{name ? name : "No Name"}</td>
                <td>{unit ? unit : "No unit"}</td>
                <td>
                  <ChangeEntityButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginator {...{ handlePageChange, pagesCount }} />
      </EntityWrapper>
    </section>
  );
};

export default RateType;
