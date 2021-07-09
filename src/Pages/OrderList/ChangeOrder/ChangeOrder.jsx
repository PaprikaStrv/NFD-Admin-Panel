import React, { useEffect, useState } from "react";
import OrderChangeSelect from "../../../Components/OrderChangeSelect/OrderChangeSelect";
import style from "../../../Components/OrderChangeSelect/OrderChangeSelect.module.scss";
import s from "./ChangeOrder.module.scss";
import { Form } from "react-final-form";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clean_input from "../../../Images/clean_input.svg";
import moment from "moment";
import "moment/locale/ru";
import "moment-duration-format";
import { ReactSVG } from "react-svg";
import CheckBox from "../../../Components/CheckBox/CheckBox";
require("moment-duration-format");

const ChangeOrder = ({
  order,
  cities,
  points,
  orderStatus,
  rates,
  setOrderChangeActive,
}) => {
  let filteredPoints = [];
  points.data.filter((point) => {
    const { cityId, adress, id } = point;
    if (cityId != null && cityId.id === order.data.cityId.id) {
      filteredPoints.push(point);
    }
  });

  console.log(order);
  const [startDate, setCurStartDate] = useState(order.data.dateFrom);
  const [endDate, setCurEndDate] = useState(order.data.dateTo);

  const handleStartDate = (date) => {
    setCurStartDate(date);
    setActive(true);
    setCurEndDate("");
  };

  const handleEndDate = (date) => {
    setCurEndDate(date);
  };

  const handleStartDateCleanBtn = () => {
    setCurStartDate("");
    setCurEndDate("");
  };

  const handleEndDateCleanBtn = () => {
    setCurEndDate("");
  };

  //   const filterPassedTime = (time) => {
  //     const selectedDate = new Date(time);
  //     return startDate.getTime() < selectedDate.getTime();
  //   };

  const [isCalenadarActive, setActive] = useState(true);

  useEffect(() => {
    if (startDate || startDate !== "") setActive(false);
  }, [startDate]);

  const [curCity, setCurCity] = useState(order.data.cityId.id);
  const handlerPutCity = (value) => {
    setCurCity(value);
  };

  const [curPoint, setCurPoint] = useState(order.data.pointId.id);
  const handlerPutPoint = (value) => {
    setCurPoint(value);
  };

  const [curStatus, setCurStatus] = useState(order.data.orderStatusId.id);
  const handlerPutStatus = (value) => {
    setCurStatus(value);
  };

  const [curRate, setCurRate] = useState();
  const handlerPutRate = (value) => {
    setCurRate(value);
  };

  const onSubmit = () => {
    console.log(curCity);
    console.log(curPoint);
    console.log(curStatus);
    console.log(curRate);
    console.log(startDate);
    console.log(endDate)
  };

  return (
    <div className={s.changeOrderWrapper}>
      <div className={s.pageTitle}>Заказ {order.data.id}</div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className={s.orderInfoInputs}>
              <OrderChangeSelect
                array={cities.data}
                value={curCity}
                label="Город"
                selectValue={order.data.cityId}
                handlerPutSelect={handlerPutCity}
              />

              <OrderChangeSelect
                array={filteredPoints}
                value={curPoint}
                label="Пункт выдачи"
                selectValue={order.data.pointId}
                handlerPutSelect={handlerPutPoint}
              />

              <OrderChangeSelect
                array={orderStatus.data}
                label="Статус"
                value={curStatus}
                selectValue={order.data.orderStatusId}
                handlerPutSelect={handlerPutStatus}
              />

              <div className={style.selectWrapper}>
                <label>Тариф</label>
                <select onChange={(e) => handlerPutRate(e.target.value)} value={curRate}>
                  <option />
                  {rates.data.map(({ rateTypeId }) => {
                    if (order.data.rateId) {
                      return (
                        <option
                          key={rateTypeId.id}
                          value={rateTypeId.id}
                          selected={
                            rateTypeId.id === order.data.rateId.rateTypeId.id
                          }
                        >
                          {rateTypeId.name}
                        </option>
                      );
                    } else {
                      return (
                        <option key={rateTypeId.id} value={rateTypeId.id}>
                          {rateTypeId.name}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>

              <div className={style.selectWrapper}>
                <label>Начало аренды</label>
                <div className={s.dataInputField}>
                  <DatePicker
                    locale="ru"
                    clearButtonClassName={s.cleanInputBtn}
                    selected={startDate}
                    minDate={new Date()}
                    onChange={(date) => handleStartDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm"
                  />
                  <div
                    className={s.cleanInputBtn}
                    onClick={handleStartDateCleanBtn}
                  >
                    <ReactSVG src={clean_input} />
                  </div>
                </div>
              </div>

              <div className={style.selectWrapper}>
                <label>Конец аренды</label>
                <div className={s.dataInputField}>
                  <DatePicker
                    locale="ru"
                    selected={endDate}
                    minDate={startDate}
                    // filterTime={filterPassedTime}
                    disabled={isCalenadarActive}
                    onChange={(date) => handleEndDate(date)}
                    showTimeSelect
                    dateFormat="dd.MM.yyyy HH:mm "
                  />
                  <div
                    className={s.cleanInputBtn}
                    onClick={handleEndDateCleanBtn}
                  >
                    <ReactSVG src={clean_input} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.selectWrapper}>
              <CheckBox name="Полный бак" checked={order.data.isFullTank} />
              <CheckBox
                name="Детское кресло"
                checked={order.data.isNeedChildChair}
              />
              <CheckBox name="Правый руль" checked={order.data.isRightWheel} />
            </div>

            <div>
              <button type="submit">Изменить</button>
              <button onClick={() => setOrderChangeActive(false)}>
                Отменить
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default ChangeOrder;
