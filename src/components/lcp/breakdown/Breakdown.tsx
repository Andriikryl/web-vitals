"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function Breakdown() {
  const [Ttfb, setTtfb] = useState(false);
  const [resource, setResource] = useState(false);
  const [time, setTime] = useState(false);
  const [dilay, setDilay] = useState(false);
  const handelClickTtfb = () => {
    setTtfb(true);
    setResource(false);
    setTime(false);
    setDilay(false);
  };
  const handelClickResource = () => {
    setResource(true);
    setTtfb(false);
    setTime(false);
    setDilay(false);
  };
  const handelClickTime = () => {
    setDilay(false);
    setTime(true);
    setResource(false);
    setTtfb(false);
  };
  const handelClickDilay = () => {
    setDilay(true);
    setTime(false);
    setResource(false);
    setTtfb(false);
  };
  return (
    <div>
      <div className={style.box__stat}>
        <h3 className={style.lcp__title}>lcp</h3>
        <ul role="list" className={style.list__stat}>
          <li className={style.stat__item} onClick={handelClickTtfb}>
            <span className={style.stat__number}>#1</span>
            <h4 className={style.stat__title}>Time to first bite</h4>
            <div className={style.document}></div>
          </li>
          <li className={style.stat__item} onClick={handelClickResource}>
            <span className={style.stat__number}>#2</span>
            <h4 className={style.stat__title}>Resource load delay</h4>
            <div className={style.document__two}></div>
            <div className={style.style__sheet}></div>
            <div className={style.style__sheet}></div>
          </li>
          <li className={style.stat__item} onClick={handelClickTime}>
            <span className={style.stat__number}>#3</span>
            <h4 className={style.stat__title}>Resource load time</h4>
            <div className={style.image}></div>
            <div className={style.script}></div>
          </li>
          <li className={style.stat__item} onClick={handelClickDilay}>
            <span className={style.stat__number}>#4</span>
            <h4 className={style.stat__title}>Element render delay</h4>
            <div className={style.script__two}></div>
          </li>
        </ul>
        <h3 className={style.box__title}>Timeline</h3>
      </div>
      <div className={style.answear__box}>
        <AnimatePresence>
          {Ttfb && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={style.answear__text}>
                The time from when the user initiates loading the page until
                when the browser receives the first byte of the HTML document
                response. (See the TTFB metric doc for more details.)
              </p>
            </motion.div>
          )}
          {resource && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={style.answear__text}>
                The delta between TTFB and when the browser starts loading the
                LCP resource. *
              </p>
            </motion.div>
          )}
          {time && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={style.answear__text}>
                The time it takes to load the LCP resource itself. *
              </p>
            </motion.div>
          )}
          {dilay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={style.answear__text}>
                The delta between when the LCP resource finishes loading until
                the LCP element is fully rendered.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
