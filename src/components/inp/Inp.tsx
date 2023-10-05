import React from "react";
import { Container } from "../container/Container";
import CoreSet from "../coreSet/CoreSet";
import style from "./style.module.css";

const data = ["good", "need improvement", "poor"];

export default function Inp() {
  return (
    <section className={style.inp__section}>
      <Container>
        <CoreSet
          title="inp"
          desciprion="Interaction to Next Paint"
          data={data}
          className={style.time}
        />
        <p className={style.desciprion}>
          INP is a metric that assesses a pages overall responsiveness to user
          interactions by observing the latency of all click, tap, and keyboard
          interactions that occur throughout the lifespan of a users visit to a
          page. The final INP value is the longest interaction observed,
          ignoring outliers.
        </p>
      </Container>
    </section>
  );
}
