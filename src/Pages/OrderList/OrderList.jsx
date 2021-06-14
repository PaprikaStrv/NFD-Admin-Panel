import React from "react";
import Paginator from "../../Components/Paginator/Paginator";
import ServerError from "../../Components/ServerError/ServerError";
import s from "./OrderList.module.scss";
import { prepareImgLink } from "./../../helpers/imgPrepare";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
import { formatPrice } from "./../../helpers/formatPrice";
require("moment-duration-format");

const OrderList = ({ orderList, response, handlePageChange }) => {
  const pagesCount = Math.ceil(orderList.count / 3);
  return (
    <section>
      {response ? (
        <ServerError />
      ) : (
        <>
          <div className={s.pageTitle}>Заказы</div>
          <div className={s.ordersWrapper}>
            <div className={s.sortParamsWrapper}>
              <div className={s.sortParamsContainer}>
                <div className={s.selectWrapper}>
                  <select>
                    <option>За день</option>
                    <option>За неделю</option>
                    <option>За месяц</option>
                  </select>
                </div>
                <div className={s.selectWrapper}>
                  <select>
                    <option>Модель1</option>
                    <option>Модель2</option>
                    <option>Модель3</option>
                  </select>
                </div>

                <div className={s.selectWrapper}>
                  <select>
                    <option>Город1</option>
                    <option>Город2</option>
                    <option>Город3</option>
                  </select>
                </div>
                <div className={s.selectWrapper}>
                  <select>
                    <option>В процессе</option>
                    <option>Отменён</option>
                    <option>Завершён</option>
                  </select>
                </div>
              </div>

              <button>Применить</button>
            </div>

            {orderList.data.map(
              ({
                id,
                cityId,
                carId,
                pointId,
                color,
                dateFrom,
                dateTo,
                price,
                isFullTank,
                isNeedChildChair,
                isRightWheel,
              }) => {
                return (
                  <div key={id} className={s.orderWrapper}>
                    <div className={s.orderImgWrapper}>
                      <img
                        src={
                          carId ? prepareImgLink(carId.thumbnail.path) : null
                        }
                      />
                    </div>

                    <div className={s.orderInfoWrapper}>
                      <div className={s.textLine}>
                        {carId && (
                          <span>
                            {carId.name.toUpperCase().replace(/[.,%]/g, "")}{" "}
                          </span>
                        )}
                        в {cityId && <span>{cityId.name}</span>},{" "}
                        {pointId && pointId.address}
                      </div>
                      <div className={s.textLine}>
                        {dateFrom &&
                          moment(dateFrom).format("DD.MM.YYYY hh:mm")}{" "}
                        — {dateTo && moment(dateTo).format("DD.MM.YYYY hh:mm")}
                      </div>
                      <div className={s.textLine}>
                        Цвет:{" "}
                        {color && (
                          <span>{color[0].toUpperCase() + color.slice(1)}</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <div>
                        <div>checkBox</div>
                        <div>Полный бак</div>
                      </div>

                      <div>
                        <div>checkBox</div>
                        <div>Детское кресло</div>
                      </div>

                      <div>
                        <div>checkBox</div>
                        <div>Правый руль</div>
                      </div>
                    </div>

                    <div>{price && formatPrice(price)} ₽</div>

                    <div>
                      <button>Готово</button>
                      <button>Отмена</button>
                      <button>Изменить</button>
                    </div>
                  </div>
                );
              }
            )}

            <Paginator {...{ handlePageChange, pagesCount }} />
          </div>
        </>
      )}
    </section>
  );
};

export default OrderList;
