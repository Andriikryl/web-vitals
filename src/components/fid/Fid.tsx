import React from "react";
import { Container } from "../container/Container";
import CoreSet from "../coreSet/CoreSet";
import style from "./style.module.css";
import ExempleFid from "./exempleFid/ExempleFid";
const data = ["good", "need improvment", "poor"];
export default function Fid() {
  return (
    <section>
      <Container>
        <CoreSet
          title="fid"
          desciprion="First Input Delay"
          data={data}
          className={style.time}
        />
        <p className={style.description}>
          FID measures the time from when a user first interacts with a page
          (that is, when they click a link, tap on a button, or use a custom,
          JavaScript-powered control) to the time when the browser is actually
          able to begin processing event handlers in response to that
          interaction.
        </p>
        <ExempleFid/>
      </Container>
    </section>
  );
}
