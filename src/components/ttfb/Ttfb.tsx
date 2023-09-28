import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";
import CoreSet from "../coreSet/CoreSet";
const data = ["good", "needs imporovment", "poor"];
export default function Ttfb() {
  return (
    <section className={style.ttfb__section}>
      <Container>
        <CoreSet
          title="ttfb"
          desciprion="Time to first bite"
          data={data}
          className={style.time}
        />
        <p className={style.ttfb__description}>
          It is recommended that your server responds to navigation requests
          quickly enough so that the 75th percentile of users experience an FCP
          within the good threshold. As a rough guide, most sites should strive
          to have a TTFB of 0.8 seconds or less.
        </p>
        <span className={style.style__block}>but</span>
        <p className={style.ttfb__description}>
          TTFB is not a Core Web Vitals metric, so it is not absolutely
          necessary that sites meet the good TTFB threshold, provided that it
          does not impede their ability to score well on the metrics that
          matter.
        </p>
      </Container>
    </section>
  );
}
