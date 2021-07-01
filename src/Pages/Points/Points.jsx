import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "./../../Components/Paginator/Paginator";

const Points = ({ points, handlePageChange}) => {
  const pagesCount = Math.ceil(points.count / 6);
  return (
    <section>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton />
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Адрес</th>
              <th>Город</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {points.data.map(({ id, name, address, cityId }) => (
              <tr key={id}>
                <td>{name ? name : "No Name"}</td>
                <td>{address ? address : "No address"}</td>
                <td>
                  {cityId.length !== 0 && cityId.name ? cityId.name : "No City"}
                </td>
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

export default Points;
