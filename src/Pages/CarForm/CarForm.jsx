import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import s from "./CarForm.module.scss";
import noCarImg from "../../Images/noCarImg.jpg";
import { NavLink } from "react-router-dom";

const CarForm = () => {
  const [carImg, setCarImg] = useState();
  const [preview, setPreview] = useState();
  const [progress, setProgress] = useState(0);
  const [carModel, setCarModel] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);

  const handlerPhotoSelect = (e) => {
    setCarImg(e.target.files[0]);
    if (!carImg) {
      setProgress(progress + 11, 1111);
    }
  };

  const handlerModelInput = (value) => {
    setCarModel(value);
    if (!carModel) {
      setProgress(progress + 11, 1111);
    }
  };

  const handlerNumberInput = (value) => {
    setCarNumber(value);
    if (!carNumber) {
      setProgress(progress + 11, 1111);
    }
  };

  const handlerPriceMinInput = (value) => {
    setPriceMin(value);
    if (!priceMin) {
      setProgress(progress + 11, 1111);
    }
  };

  const handlerPriceMaxInput = (value) => {
    setPriceMax(value);
    if (!priceMax) {
      setProgress(progress + 11, 1111);
    }
  };

  useEffect(() => {
    if (carModel === "" && progress !== 0) setProgress(progress - 11, 1111);
  }, [carModel]);

  useEffect(() => {
    if (carNumber === "" && progress !== 0) setProgress(progress - 11, 1111);
  }, [carNumber]);

  useEffect(() => {
    if (priceMin === "" && progress !== 0) setProgress(progress - 11, 1111);
  }, [priceMin]);

  useEffect(() => {
    if (priceMax === "" && progress !== 0) setProgress(progress - 11, 1111);
  }, [priceMax]);

  useEffect(() => {
    if (!carImg) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(carImg);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [carImg]);

  const handleSubmitLogimForm = (values) => {
    alert(1);
  };
  return (
    <section>
      <div className={s.carChangePageWrapper}>
        <div className={s.carFormTitle}>Карточка Автомобиля</div>
        <div className={s.formWrapper}>
          <Form
            onSubmit={handleSubmitLogimForm}
            validate={(values) => {
              const errors = {};
              if (!values.model) {
                errors.model = "Введите название модели";
              }
              if (!values.number) {
                errors.number = "Введите номер автомобиля";
              }

              if (!values.minPrice) {
                errors.minPrice = "Введите минимальную цену";
              }
              if (!values.maxPrice) {
                errors.maxPrice = "Введите максимальную цену";
              }
              if (!values.category) {
                errors.category = "Выберите категорию";
              }

              return errors;
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <div className={s.leftFormBlock}>
                  <div className={s.carImageWrapper}>
                    <img src={preview ? preview : noCarImg} alt="NoCarImg" />
                  </div>
                  <div className={s.leftCarInfo}>
                    <span className={s.carName}>{carModel}</span>
                    <span className={s.category}>Люкс</span>
                  </div>
                  <div className={s.fileSelect}>
                    <input
                      type={"file"}
                      id="input_file"
                      onChange={handlerPhotoSelect}
                    />
                    <label htmlFor="input_file">
                      <div className={s.labelWrapper}>
                        <div className={s.selectFileText}>
                          {carImg ? carImg.name : "Выберите файл..."}
                        </div>
                        <div className={s.selectBtn}>Обзор</div>
                      </div>
                    </label>
                  </div>

                  <div className={s.loadProcessWrapper}>
                    <div className={s.loadProcessContainer}>
                      <div className={s.loadProcessText}>
                        <span>Заполненно</span>
                        <span>{progress}%</span>
                      </div>
                      <div className={s.outerProcessLine}>
                        <div
                          className={s.innerProcessLine}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className={s.carDescription}>
                    <div className={s.descriptionText}>Описание</div>
                    <p className={s.description}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Odio eaque, quidem, commodi soluta qui quae quod dolorum
                      sint alias, possimus illum assumenda eligendi cumque?
                    </p>
                  </div>
                </div>
                <div className={s.rightFormBlock}>
                  <div className={s.carSettingsText}>Настройки автомобиля</div>
                  <div className={s.rightInputsWrapper}>
                    <div className={s.leftColumn}>
                      <Field name="model">
                        {({ input, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Модель автомобиля</label>
                            <input
                              className={
                                meta.error && meta.touched && !carModel
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...input}
                              type="text"
                              value={carModel}
                              onChange={(event) =>
                                handlerModelInput(event.target.value)
                              }
                            />
                            {meta.error && meta.touched && !carModel && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="number">
                        {({ input, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Номер</label>
                            <input
                              className={
                                meta.error && meta.touched && !carNumber
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...input}
                              type="text"
                              value={carNumber}
                              onChange={(event) =>
                                handlerNumberInput(event.target.value)
                              }
                            />
                            {meta.error && meta.touched && !carNumber && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="minPrice">
                        {({ input, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Мин. Цена</label>
                            <input
                              className={
                                meta.error && meta.touched && !priceMin
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...{ input }}
                              type="number"
                              value={priceMin}
                              onChange={(event) =>
                                handlerPriceMinInput(event.target.value)
                              }
                            />
                            {meta.error && meta.touched && !priceMin && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="maxPrice">
                        {({ input, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Макс. цена</label>
                            <input
                              className={
                                meta.error && meta.touched && !priceMax
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...{ input }}
                              type="number"
                              value={priceMax}
                              onChange={(event) =>
                                handlerPriceMaxInput(event.target.value)
                              }
                            />
                            {meta.error && meta.touched && !priceMax && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                    </div>

                    <div className={s.rightColumn}>
                      <Field name="category">
                        {({ select, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Категория</label>
                            <select
                              {...select}
                              className={
                                meta.error && meta.touched
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                            >
                              <option></option>
                              <option>1</option>
                            </select>
                            {/* <input
                                className={
                                  meta.error && meta.touched
                                    ? `${s.inputField} ${s.inputWithError}`
                                    : s.inputField
                                }
                              {...input}
                              type="text"
                            />
                            {meta.error && meta.touched && (
                          <div className={s.inputErrorMsg}>{meta.error}</div>
                        )} */}
                          </div>
                        )}
                      </Field>
                      <Field>
                        {({ textarea, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Описание</label>
                            <input
                              className={
                                meta.error && meta.touched
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...textarea}
                              type="text"
                            />
                            {meta.error && meta.touched && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field>
                        {({ input, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Количество топлива</label>
                            <input
                              className={
                                meta.error && meta.touched
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...input}
                              type="text"
                            />
                            {meta.error && meta.touched && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field>
                        {({ input, meta }) => (
                          <div className={s.fieldWrapper}>
                            <label>Доступные цвета</label>
                            <input
                              className={
                                meta.error && meta.touched
                                  ? `${s.inputField} ${s.inputWithError}`
                                  : s.inputField
                              }
                              {...input}
                              type="text"
                            />
                            {meta.error && meta.touched && (
                              <div className={s.inputErrorMsg}>
                                {meta.error}
                              </div>
                            )}
                          </div>
                        )}
                      </Field>
                    </div>
                  </div>

                  <NavLink to="/Cars">Отменить</NavLink>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default CarForm;
