import React from 'react';
import TextUpercase from '../../TextUpercase';
import styles from './Step.module.css';


const Step = ({ title, question, questionGreen, children, questionTop }) => (
    <div className={styles.container}>
    <TextUpercase>
        {title}
    </TextUpercase>
    <div className={styles.text}>
        {question}
        {<span>{questionGreen}</span>}
        {<p>{questionTop}</p>}
    </div>
        {children}
    </div>  
);

export default Step;