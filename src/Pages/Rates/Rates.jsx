import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "../../Components/Paginator/Paginator";

const Rates = ({ rates, handlePageChange }) => {
  const pagesCount = Math.ceil(rates.count / 6);
  return (
    <section>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Изменить</th>
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
                <td>{price ? price : "No price"}</td>
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

export default Rates;
