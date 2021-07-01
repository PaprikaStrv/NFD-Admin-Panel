import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "../../Components/Paginator/Paginator";

const CarCategories = ({ carCategories, handlePageChange }) => {
  const pagesCount = Math.ceil(carCategories.count / 6);
  return (
    <section>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {carCategories.data.map(({ id, name, description }) => (
              <tr key={id}>
                <td>{name ? name : "No Name"}</td>
                <td>{description ? description : "No description"}</td>
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

export default CarCategories;
