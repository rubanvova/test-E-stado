import React from 'react'; 
import styles from './header.module.css';


const Header = () => (
        <div className={styles.headerWrapper}>
           <div className={styles.container1}>
               <div className={styles.logoHeader}></div>
               <div className={styles.textLogo}>
                  Система комплексного мониторинга<br/>
                  состояния молочных коров
               </div>
           </div>
           <div className={styles.container2}>
                <div className={styles.text1}>
                Ответьте на 3 вопроса и узнайте
                </div>
                <div className={styles.text2}>
                Как <span className={styles.textGreen}>увеличить удой каждой коровы<br/> 
                до 15%</span> путем
                </div>
           </div>
           <div className={styles.container3}>
               <div className={styles.box1}>
                   <div>
                        <span>Своевременного<br/>
                        определения половой охоты</span><br/>
                        особенно если она не заметна <br/>
                        по внешним признакам
                    </div>
               </div>
               <div className={styles.box2}>
                   <div>
                        <span>Анализом состояния<br/>
                        здоровья коровы</span><br/>
                        при наблюдении за жвачкой,<br/>
                        активностью и температурой тела
                    </div>
               </div>
               <div className={styles.box3}>
                    <div>
                        <span>Выявление хромоты</span><br/>
                        предупреждением <br/>
                        и выявлением развития <br/>
                        хромоты
                    </div>
               </div>
           </div>
        </div>
);


export default Header;