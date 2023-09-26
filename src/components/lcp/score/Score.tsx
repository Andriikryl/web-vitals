import React from "react";
import style from "./style.module.css";

export default function Score() {
  return (
    <div className={style.container}>
      <h3 className={style.score__total}>TOTAL: 100%</h3>
      <div className={style.score__box}>
        <div className={style.score__description}>
          <p>
            Time to first byte (TTFB) <br />
            ~40%
          </p>
        </div>
        <div className={style.score__description}>
          <p>Resource load delay ~ 10%</p>
        </div>
        <div className={style.score__description}>
          <p>Resource load time ~40%</p>
        </div>
        <div className={style.score__description}>
          <p>Element render delay ~10%</p>
        </div>
      </div>
    </div>
  );
}
