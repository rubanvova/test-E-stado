import React from 'react'; 
import Box from './Box';
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
               <Box 
                title={'Своевременного\n определения половой охоты'}
                subTitle="особенно если она не заметна по внешним признакам"
                />
                <Box 
                title={'Анализом состояния\n здоровья коровы'}
                subTitle="при наблюдении за жвачкой,  активностью и температурой тела"
                 />
                 <Box
                 title="Выявление хромоты"
                 subTitle="предупреждением и выявлением развития хромоты"
                 />
           </div>
        </div>
);


export default Header;