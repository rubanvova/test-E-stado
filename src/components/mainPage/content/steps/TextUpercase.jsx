import React from 'react';
import styles from '../content.module.css';


const textUpercase = (props) => (
    <div className={styles.textUpercase}>
            {props.children}   
    </div>
);

export default textUpercase;