import React from 'react';
import styles from '../content.module.css';
import InputMask from 'react-input-mask';
 


export default () => {
    return (
        <div className={styles.fifthStep}>
            <div className={styles.text}>
                 <span>Куда прислать вам ответ?</span>
            </div>
            <div className={styles.checkboxWrapperFifthStep}>
               <label >
                   <div className={styles.boxRadioFifthStep} >
                       <input className={styles.radio} type="radio"  name="yes"/>По телефону 
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
               <label >
                   <div className={styles.boxRadioFifthStep}>
                       <input className={styles.radio}  type="radio" name="yes"/>E-mail
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
               <label >
                   <div className={styles.boxRadioFifthStep}>
                        <input className={styles.radio}  type="radio" name="yes"/>Viber
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
                <label >
                   <div className={styles.boxRadioFifthStep}>
                        <input className={styles.radio}  type="radio" name="yes"/>Telegram
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
                <label >
                   <div className={styles.boxRadioFifthStep}>
                        <input className={styles.radio}  type="radio" name="yes"/>Whatsaap
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
            </div>
            <div className={styles.phoneNumberWrapper}>
                <div className={styles.textFifthStep}>
                    Введите ваш номер телефона
                </div>
                <div>
                    <InputMask className={styles.phone}
                    placeholder="+375 (__)___-__-__"
                    mask="+375 (99)999-99-99"
                    maskChar="_" />
                </div>
            </div>
        </div>
    )
};