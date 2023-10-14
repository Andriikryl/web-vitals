import React from "react";
import style from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";
const linksData = [
  {
    id: 1,
    title: "  Optimize Largest Contentful Paint",
    href: "https://web.dev/i18n/en/optimize-lcp/#understanding-your-lcp-metric",
  },
  {
    id: 2,
    title: "            First Contentful Paint (FCP)",
    href: "https://web.dev/i18n/en/fcp/",
  },
  {
    id: 3,
    title: "      Cumulative Layout Shift (CLS)",
    href: "https://web.dev/i18n/en/cls/",
  },
  {
    id: 4,
    title: "             Optimize Cumulative Layout Shift",
    href: "https://web.dev/i18n/en/optimize-cls/#animations",
  },
  {
    id: 5,
    title: "          First Input Delay (FID)",
    href: "https://nextjs.org/learn/seo/web-performance/fid",
  },
  {
    id: 6,
    title: "    Performance budgets 101",
    href: "https://web.dev/performance-budgets-101/",
  },
  {
    id: 7,
    title: "Choose the right image format",
    href: "https://web.dev/choose-the-right-image-format/",
  },
  {
    id: 8,
    title: "What is speed?",
    href: "https://web.dev/articles/what-is-speed",
  },
  {
    id: 9,
    title: "Optimize long tasks",
    href: "https://web.dev/articles/optimize-long-tasks",
  },
];

export default function Resources() {
  return (
    <section className={style.resource}>
      <Container>
        <h4 className={style.resoursec__title}>Resources:</h4>
        <ul className={style.resource__list} role="list">
          {linksData.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <Link className={style.item__link} href={item.href}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
