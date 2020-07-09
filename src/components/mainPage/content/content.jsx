import React, { useState } from 'react';
import styles from './content.module.css';
import arrow from './Arrow1.png';
import cow from './cow.png';
import classnames from 'classnames';
import {FerstStep, SecondStep, ThirdStep, FifthStep, SixthStep } from './steps';


const Content = () => {
const [activeStep, setActiveStep] = useState(1);
const onClickButton = () => {
      setActiveStep(activeStep + 1)
};

const getActiveStep = (activeStep) => {
    switch (activeStep) {
        case 1:
          return <FerstStep />
        case 2:
          return <SecondStep />
        case 3:
          return <ThirdStep />
        case 4:
          return <FifthStep />  
        case 5:
          return <SixthStep />  
        default:
          return <FerstStep />
      }
};

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.cowWrapper}>
                   <div className={styles.cow}> <img src={cow} alt=''/></div>
                </div>
            <div className={styles.container}>
                <div className={styles.boxBar}>
                    <div className={styles.border}>
                            <div className={classnames(styles.barCircle,  {
                                [styles.activeBarCircle]: activeStep >= 1,
                            })}></div>
                            <div className={classnames(styles.barCircle,  {
                                [styles.activeBarCircle]: activeStep >= 2 
                            })}></div>
                            <div className={classnames(styles.barCircle,  {
                                [styles.activeBarCircle]: activeStep >= 3 
                            })}></div>
                            <div className={styles.greyLine}></div>
                            <div className={classnames(styles.greenLine, {
                                 [styles.activeGreenLine1]: activeStep >= 1,
                                 [styles.width50]: activeStep >= 2, 
                                 [styles.width100]: activeStep >= 3
                            })}></div>
                   </div>
                </div>
                {getActiveStep(activeStep)}
                <div className={styles.buttonWrapper}>
                    <button className={classnames(styles.buttonNext, {
                        [styles.noActivebuttonNext]: activeStep >= 4,
                        [styles.buttonNextFifthStep]: activeStep >= 4
                    })} onClick={onClickButton} >
                        <div>
                            <img className={classnames(styles.arrow,  {
                             [styles.arrowNoACtive]: activeStep >= 4
                            })} src={arrow} alt=''/>
                        </div>
                    </button>
                </div>           
            </div>
        </div>
    )
};

export default Content;