import React from 'react';
import styles from '../content.module.css';

export default () => (
        <div className={styles.secondStep}>
            <div className={styles.textUpercase}>
                ВОПРОС 2
            </div>
            <div className={styles.text}>
                Сколько  <span>молока в сутки<br/>
                вы доите?</span>
            </div>
            <div className={styles.inputWrapper}>
                <input placeholder='Например: 12' className={styles.input}/>
            </div>
        </div>   
);
