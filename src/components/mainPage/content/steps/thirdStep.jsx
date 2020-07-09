import React from 'react';
import styles from '../content.module.css';

export default () => {
    return (
        <div className={styles.thirdStep}>
           <div className={styles.textUpercase}>
                ВОПРОС 3
            </div>
            <div className={styles.text}>
                 <span>Вы являетесь?</span>
            </div>
            <div className={styles.checkboxWrapper}>
               <label >
                   <div className={styles.boxRadio} >
                       <input className={styles.radio} type="radio"  name="yes"/>Руководителем фермы
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
               <label >
                   <div className={styles.boxRadio}>
                       <input className={styles.radio}  type="radio" name="yes"/>Зоотехником
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
               <label >
                   <div className={styles.boxRadio}>
                        <input className={styles.radio}  type="radio" name="yes"/>Ветеренаром
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
            </div>
        </div>
    )
};