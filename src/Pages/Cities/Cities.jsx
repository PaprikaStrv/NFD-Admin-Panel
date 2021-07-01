import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "./../../Components/Paginator/Paginator";

const Cities = ({ cities, handlePageChange }) => {
  const pagesCount = Math.ceil(cities.count / 6);
  return (
    <section>
      <PageTitle title="Города" />
      <EntityWrapper>
        <AddEntityButton />
        <table>
          <thead>
            <tr>
              <th>Город</th>
              <th>Изменить</th>
            </tr>
          </thead>
          <tbody>
            {cities.data.map(({ id, name }) => (
              <tr key={id}>
                <td>{name ? name : "No Name"}</td>
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

export default Cities;
