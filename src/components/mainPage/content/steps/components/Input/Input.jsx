import React from "react";
import styles from "./Input.module.css";

const Input = (props) => (
  <div className={styles.wrapper}>
    {<input placeholder={props.children} className={styles.input} />}
  </div>
);

export default Input;
