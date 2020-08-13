import React from "react";
import icon from "../../../img/icon.png";
import style from "./Box.module.css";

const Box = ({ title, subTitle }) => (
  <div className={style.container}>
    <div className={style.icon}>
      <img src={icon} alt="boxIcon" />
    </div>
    <div className={style.column}>
      <div className={style.title}> {title} </div>
      <div className={style.subTitle}> {subTitle} </div>
    </div>
  </div>
);

export default Box;
