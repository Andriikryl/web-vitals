import React from "react";
import CoreSet from "../coreSet/CoreSet";
import style from "./style.module.css";
import { Container } from "../container/Container";
import ClsExempel from "./clsExempel/ClsExempel";
import ClsScore from "./clsScore/ClsScore";
import Optimize from "./optimize/Optimize";

const data = ["good", "needs improvment", "poor"];

export default function Cls() {
  return (
    <section className={style.cls}>
      <Container>
        <CoreSet
          title="cls"
          desciprion="Cumulative Layout Shift "
          data={data}
          className={style.time}
        />
        <p className={style.cls__description}>
          Cumulative Layout Shift (CLS) is a stable Core Web Vital metric. It is
          an important, user-centric metric for measuring visual stability
          because it helps quantify how often users experience unexpected layout
          shifts—a low CLS helps ensure that the page is delightful.
        </p>
        <ClsExempel />
        <ClsScore />
        <Optimize />
      </Container>
    </section>
  );
}
