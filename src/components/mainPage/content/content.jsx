import React, { useState } from 'react';
import classnames from 'classnames';
import arrow from './Arrow1.png';
import cow from './cow.png';
import {
FirstStep,
SecondStep,
ThirdStep, 
FifthStep
} from './steps';
import styles from './content.module.css';


const Content = () => {
    const [activeStep, setActiveStep] = useState(1);

    const onClickRadio = (value) => { 
            setActiveStep(value);
    };

    const onClickButton = () => {
        if (activeStep <= 3) {
            setActiveStep(activeStep + 1)
        }
    };

    const getActiveStep = (activeStep) => {
        switch (activeStep) {
            case 1:
            return <FirstStep />
            case 2:
            return <SecondStep />
            case 3:
            return <ThirdStep />
            case 4:
            return <FifthStep />  
            default:
            return <FirstStep />
        }
    };

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.container}>
                <div className={styles.boxBar}>
                    <div className={styles.border}>
                            <div onClick={() => onClickRadio(1)} className={classnames(styles.barCircle,  {
                                [styles.activeBarCircle]: activeStep >= 1,
                            })}></div>
                            <div onClick={() => onClickRadio(2)} className={classnames(styles.barCircle,  {
                                [styles.activeBarCircle]: activeStep >= 2 
                            })}></div>
                            <div onClick={() => onClickRadio(3)} className={classnames(styles.barCircle,  {
                                [styles.activeBarCircle]: activeStep >= 3 
                            })}></div>
                            <div className={styles.greyLine}></div>
                            <div className={classnames(styles.greenLine, {
                                 [styles.activeGreenLine]: activeStep >= 1,
                                 [styles.width50]: activeStep >= 2, 
                                 [styles.width100]: activeStep >= 3
                            })}></div>
                   </div>
                </div>
                     {getActiveStep(activeStep)}
                <div className={styles.buttonWrapper}>
                    <button className={classnames(styles.buttonNext, {
                        [styles.noActivebuttonNext]: activeStep >= 4
                    })} onClick={onClickButton} >
                        <div>
                            {activeStep <= 3 && (<img className={styles.arrow} src={arrow} alt=''/>)}          
                        </div>
                    </button>
                </div>           
            </div>
            <div className={styles.cowWrapper}>
                <div className={styles.cow}><img src={cow} alt=''/></div>
            </div>
        </div>
       

    )
};

export default Content;
