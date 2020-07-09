import React from 'react';
import styles from './App.module.css';
import Header from './components/mainPage/header/header';
import Content from './components/mainPage/content/content';


function App() {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
       <Header />
       <Content />
      </div>
    </div>
  );
}

export default App;
