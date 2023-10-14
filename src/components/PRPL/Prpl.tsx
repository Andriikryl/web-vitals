import React from "react";
import { Container } from "../container/Container";
import style from "./style.module.css";

const prplDescription = [
  {
    title: "Preload",
    descr: "the late-discovered resources.",
  },
  {
    title: "Render",
    descr: "the initial route as soon as possible.",
  },
  {
    title: "Pre-cache",
    descr: "remaining assets.",
  },
  {
    title: "Lazy load",
    descr: "other routes and non-critical assets.",
  },
];

export default function Prpl() {
  return (
    <section className={style.prpl}>
      <Container>
        <h4 className={style.prpl__title}>PRPL pattern</h4>
        <ul className={style.description__list} role="list">
          {prplDescription.map(({ title, descr }, index) => {
            return (
              <li key={index} className={style.list__item}>
                <span>{title}</span> {descr}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
