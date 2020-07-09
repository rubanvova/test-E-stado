import React from 'react';
import styles from '../content.module.css';

export default () => {
    return (
        <div className={styles.ferstStep}>
            <div className={styles.textUpercase}>
                ВОПРОС 1
            </div>
            <div className={styles.text}>
                Сколько у вас <span>дойных<br/>
                коров?</span>
            </div>
            <div className={styles.inputWrapper}>
                <input placeholder='Например: 45' className={styles.input}/>
            </div>
        </div>
    )
};