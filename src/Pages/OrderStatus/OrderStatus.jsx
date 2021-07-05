import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import s from "./OrderStatus.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";

const OrderStatus = ({
  orderStatus,
  isAddOrderStatusActive,
  handlerAddOrderStatus,
  handlerDeleteOrderStatus,
  handlerChangeOrderStatus,
  isChangeOrderStatusActive,
}) => {
  return (
    <section
      className={
        isAddOrderStatusActive || isChangeOrderStatusActive ? s.hide : null
      }
    >
      <PageTitle title="Статусы заказов" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddOrderStatus} />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Изменить</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {orderStatus.data.map(({ id, name }) => (
              <tr key={id}>
                <td>{name ? name : "No name"}</td>
                <td>
                  <ChangeEntityButton
                    handlerChangeEntity={handlerChangeOrderStatus}
                    id={id}
                  />
                </td>
                <td>
                  <DeleteEntityButton
                    handlerDeleteEntity={handlerDeleteOrderStatus}
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

export default OrderStatus;
