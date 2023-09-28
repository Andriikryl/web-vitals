import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";

export default function Resources() {
  return (
    <section className={style.resource}>
      <Container>
        <h4 className={style.resoursec__title}>Resources:</h4>
        <ul className={style.resource__list} role="list">
          <li className={style.list__item}>
            <a
              className={style.item__link}
              href="https://web.dev/i18n/en/optimize-lcp/#understanding-your-lcp-metric"
            >
              Optimize Largest Contentful Paint
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
}
