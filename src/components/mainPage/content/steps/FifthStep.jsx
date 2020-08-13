import React, { useState } from "react";
import InputMask from "react-input-mask";
import Step from "./components/Step";
import styles from "./FifthStep.module.css";

export default () => {
  const [activeRadio, setActiveRadio] = useState("phone");

  const phoneNumber = () => (
    <div>
      <div className={styles.textFifthStep}>
        <div> Введите ваш номер телефона</div>
      </div>
      <div>
        <InputMask
          className={styles.phone}
          placeholder="+375 (__)___-__-__"
          mask="+375 (99)999-99-99"
          maskChar="_"
        />
      </div>
    </div>
  );

  const Email = () => (
    <div>
      <div className={styles.textSixthStep}>
        <div> Введите ваш e-mail</div>
      </div>
      <div>
        <input placeholder="simple@example.com" className={styles.input} />
      </div>
    </div>
  );

  const onChangeRadio = (value) => {
    setActiveRadio(value);
  };

  const getInputField = (activeRadio) => {
    if (activeRadio === "phone") {
      return phoneNumber();
    }
    return Email();
  };

  return (
    <Step questionTop="Куда прислать вам ответ?">
      <div className={styles.checkboxWrapperFifthStep}>
        <label>
          <div className={styles.boxRadioFifthStep}>
            <input
              className={styles.radio}
              type="radio"
              name="yes"
              onClick={() => onChangeRadio("phone")}
            />
            По телефону
            <div className={styles.fakeRadio}></div>
          </div>
        </label>
        <label>
          <div className={styles.boxRadioFifthStep}>
            <input
              className={styles.radio}
              type="radio"
              name="yes"
              onClick={() => onChangeRadio("email")}
            />
            E-mail
            <div className={styles.fakeRadio}></div>
          </div>
        </label>
        <label>
          <div className={styles.boxRadioFifthStep}>
            <input
              className={styles.radio}
              type="radio"
              name="yes"
              onClick={() => onChangeRadio("phone")}
            />
            Viber
            <div className={styles.fakeRadio}></div>
          </div>
        </label>
        <label>
          <div className={styles.boxRadioFifthStep}>
            <input
              className={styles.radio}
              type="radio"
              name="yes"
              onClick={() => onChangeRadio("phone")}
            />
            Telegram
            <div className={styles.fakeRadio}></div>
          </div>
        </label>
        <label>
          <div className={styles.boxRadioFifthStep}>
            <input
              className={styles.radio}
              type="radio"
              name="yes"
              onClick={() => onChangeRadio("phone")}
            />
            Whatsaap
            <div className={styles.fakeRadio}></div>
          </div>
        </label>
      </div>
      <div className={styles.phoneNumberWrapper}>
        {getInputField(activeRadio)}
      </div>
    </Step>
  );
};
