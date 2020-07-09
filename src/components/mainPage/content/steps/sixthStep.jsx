import React from 'react';
import styles from '../content.module.css';


export default () => {
    return ( 
        <div className={styles.sixthStep}>
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
                <div className={styles.textSixthStep}>
                    Введите ваш  e-mail
                </div>
                <div>
                      <input placeholder='simple@example.com' className={styles.input}/>
                </div>
            </div>
        </div>
    )
}