import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container>
        <div>
          <h1 className={style.hero__title}>Web Vitals</h1>
          <p className={style.hero__description}>
            Web Vitals is an initiative by Google to provide unified guidance
            for quality signals that are essential to delivering a great user
            experience on the web.
          </p>
        </div>
      </Container>
    </section>
  );
}
