import React from 'react';
import Step from './components/Step';
import styles from './ThirdStep.module.css';

export default () => (
        <Step title="ВОПРОС 3" questionGreen="Вы являетесь?" >
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
        </Step>
);

