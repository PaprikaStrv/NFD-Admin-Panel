import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "../../Components/Paginator/Paginator";

const OrderStatus = ({ orderStatus, handlePageChange }) => {
  const pagesCount = Math.ceil(orderStatus.count / 6);
  return (
    <section>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {orderStatus.data.map(({ id, name }) => (
              <tr key={id}>
                <td>{name ? name : "No name"}</td>
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

export default OrderStatus;
