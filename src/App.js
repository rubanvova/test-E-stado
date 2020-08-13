import React from "react";
import Header from "./components/mainPage/header/header";
import Content from "./components/mainPage/content/content";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.wrapper}>
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default App;
