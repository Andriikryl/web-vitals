"use client";
import React from "react";
import { motion } from "framer-motion";
import { Container } from "../container/Container";
import style from "./style.module.css";

const speedPerception = [
  {
    title: "Is it happening?",
    description:
      "Did the navigation start successfully? Has the server responded?",
  },
  {
    title: "Is it useful?",
    description:
      "Has enough content rendered that the users can engage with it?",
  },
  {
    title: "Is it usable?",
    description:
      "Can users interact with the page, or is it still busy loading?",
  },
  {
    title: "Is it delightful?",
    description:
      "Are the interactions smooth and natural, free of lag and jank?",
  },
];

export default function Speed() {
  return (
    <section className={style.speed}>
      <Container>
        <h4 className={style.speed__title}>Speed ???</h4>
        <ul className={style.perception__list} role="list">
          {speedPerception.flatMap(({ title, description }, index) => {
            return (
              <li key={index} className={style.list__item}>
                <h5 className={style.item__title}>{title}</h5>
                <p className={style.item__description}>{description}</p>
              </li>
            );
          })}
        </ul>
        <p className={style.description}>
          Traditional performance metrics like load time or DOMContentLoaded
          time are unreliable, since their occurrence may or may not correspond
          with these feedback milestones. So, additional metrics have emerged
          that could be used to understand when a page delivers this feedback to
          its users:
        </p>
        <div className={style.box}>
          <div className={style.inner__box}>
            <h5 className={style.mobile__title}>First Paint</h5>
            <div className={style.mobile}>
              <div className={style.header}>
                <div className={style.search}></div>
              </div>
            </div>
          </div>
          <div className={style.inner__box}>
            <div className={style.mobile}>
              <div className={style.header}>
                <div className={style.burger}></div>
                <div className={style.search}></div>
              </div>
              <div className={style.body}>
                <div className={style.skeleton}>
                  <motion.div
                    className={style.dot}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                    }}
                  ></motion.div>
                  <motion.div
                    className={style.dot}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                  ></motion.div>
                  <motion.div
                    className={style.dot}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                    }}
                  ></motion.div>
                </div>
              </div>
            </div>
            <h5 className={style.mobile__title}>First Contentful Paint</h5>
          </div>
          <div className={style.inner__box}>
            <h5 className={style.mobile__title}>First Meaningful Paint</h5>
            <div className={style.mobile}>
              <div className={style.header}>
                <div className={style.burger}></div>
                <div className={style.search}></div>
              </div>
              <div className={style.body}>
                <div className={style.text__box}>
                  <div className={style.line}></div>
                  <div className={style.line}></div>
                  <div className={style.line}></div>
                  <div className={style.line}></div>
                </div>
                <div className={style.image}></div>
              </div>
            </div>
          </div>
          <div className={style.inner__box}>
            <div className={style.mobile}>
              <div className={style.header}>
                <div className={style.burger}></div>
                <div className={style.search}></div>
              </div>
              <div className={style.body}>
                <div className={style.text__box}>
                  <div className={style.line}></div>
                  <div className={style.line}></div>
                  <div className={style.line}></div>
                  <div className={style.line}></div>
                </div>
                <div className={style.image}></div>
              </div>
              <div className={style.button__group}>
                <button className={style.button}>click</button>
                <button className={style.button}>click</button>
              </div>
            </div>
            <h5 className={style.mobile__title}>Time to Interactive</h5>
          </div>
        </div>
      </Container>
    </section>
  );
}
