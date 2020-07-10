import React, { useState} from 'react';
import InputMask from 'react-input-mask';
import styles from '../content.module.css';




export default () => {
const [activeRadio, setActiveRadio] = useState(true);

const phoneNumber = () => (
    <div>
        <div className={styles.textFifthStep}>
         <div> Введите ваш номер телефона</div>
        </div>
        <div>
            <InputMask className={styles.phone}
            placeholder="+375 (__)___-__-__"
            mask="+375 (99)999-99-99"
            maskChar="_" />
        </div>
    </div>
);

const Email = () => (
    <div>
        <div className={styles.textSixthStep}>
           <div> Введите ваш  e-mail</div>
        </div>
        <div>
            <input placeholder='simple@example.com' className={styles.input}/>
        </div> 
    </div>
);

const onChangeRadio = (value) => {
      setActiveRadio(value);
};


const  input = activeRadio => {
   if (activeRadio === true) {
       return phoneNumber();
   }
   if (activeRadio === false) {
       return Email();
   }
};

    return (
        <div className={styles.fifthStep}>
            <div className={styles.text}>
                 <span>Куда прислать вам ответ?</span>
            </div>
            <div className={styles.checkboxWrapperFifthStep}>
               <label >
                   <div className={styles.boxRadioFifthStep} >
                       <input className={styles.radio} type="radio"  name="yes"  onClick={ () => onChangeRadio(true)}/>По телефону 
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
               <label >
                   <div className={styles.boxRadioFifthStep}>
                       <input className={styles.radio}  type="radio" name="yes" onClick={ () =>onChangeRadio(false)}/>E-mail
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
               <label >
                   <div className={styles.boxRadioFifthStep}>
                        <input className={styles.radio}  type="radio" name="yes" onClick={ () => onChangeRadio(true)}/>Viber
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
                <label >
                   <div className={styles.boxRadioFifthStep}>
                        <input className={styles.radio}  type="radio" name="yes" onClick={ () => onChangeRadio(true)}/>Telegram
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
                <label >
                   <div className={styles.boxRadioFifthStep}>
                        <input className={styles.radio}  type="radio" name="yes" onClick={ () => onChangeRadio(true)}/>Whatsaap
                       <div className={styles.fakeRadio}></div>
                    </div>
                </label>
            </div>
            <div className={styles.phoneNumberWrapper}>
                {input(activeRadio)}
            </div>
        </div>
    )
};



