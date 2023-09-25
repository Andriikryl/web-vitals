import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import { AnimatedText } from "../animatedText/AnimatedText";

export default function Core() {
  return (
    <section className={style.core}>
      <Container>
        <div className={style.core__box}>
          <ul role="list" className={style.core__list}>
            <li className={style.core__item}>
              <AnimatedText text={"user experience—loading"} />
            </li>
            <li className={style.core__item}>
              <AnimatedText text={"interactivity"} />
            </li>
            <li className={style.core__item}>
              <AnimatedText text={"visual stability"} />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
