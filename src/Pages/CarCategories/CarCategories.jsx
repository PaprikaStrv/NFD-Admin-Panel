import React from "react";
import AddEntityButton from "../../Components/Entity/AddEntityBtn/AddEntityBtn";
import ChangeEntityButton from "../../Components/Entity/ChangeEntityBtn/ChangeEntityBtn";
import EntityWrapper from "../../Components/Entity/EntityWrapper/EntityWrapper";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Paginator from "../../Components/Paginator/Paginator";
import s from "./CarCategory.module.scss";
import DeleteEntityButton from "./../../Components/Entity/DeleteEntityBtn/DeleteEntityBtn";

const CarCategories = ({
  carCategories,
  handlePageChange,
  handlerAddCarCategory,
  isAddCarCategory,
  handlerDeleteCarCategory,
  hanlderChangeCarCategory,
  isChangeCarCategotyActive,
}) => {
  return (
    <section
      className={isAddCarCategory || isChangeCarCategotyActive ? s.hide : null}
    >
      <PageTitle title="Категории автомобилей" />
      <EntityWrapper>
        <AddEntityButton handlerAddEntity={handlerAddCarCategory} />
        <div className={s.carCategoryTableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th className={s.categoryDescription}>Описание</th>
                <th>Изменить</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {carCategories.data.map(({ id, name, description }) => (
                <tr key={id}>
                  <td>{name ? name : "No Name"}</td>
                  <td className={s.categoryDescription}>{description ? description : "No description"}</td>
                  <td>
                    <ChangeEntityButton
                      handlerChangeEntity={hanlderChangeCarCategory}
                      id={id}
                    />
                  </td>
                  <td>
                    <DeleteEntityButton
                      handlerDeleteEntity={handlerDeleteCarCategory}
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

export default CarCategories;
