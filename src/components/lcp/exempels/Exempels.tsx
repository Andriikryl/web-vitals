"use client";
import React from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";
import clsx from "clsx";

export default function Exempels() {
  return (
    <>
      <h3 className={style.exempels__title}>Examples</h3>
      <div className={style.flex__group}>
        <div>
          <div className={style.fcp}>
            <div className={style.fcp__header}>
              <div>Logo</div>
              <div className={style.burger}></div>
            </div>
            <div className={style.text__box}>
              <p className={clsx(style.text, style.active)}>text text tex</p>
            </div>
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
            <div className={style.text__box}>
              <span className={style.text}>title</span>
            </div>
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
          <span className={style.exemples__description}>Fcp</span>
        </div>

        <div className={style.fcp}>
          <div className={style.fcp__header}>
            <div>Logo</div>
            <div className={style.burger}></div>
          </div>
          <div className={style.text__box}>
            <p className={clsx(style.text, style.active__two)}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              est eligendi, rem ipsa cum odio inventore corrupti ducimus
            </p>
          </div>
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
          <div className={style.text__box}>
            <span className={style.text}>title</span>
          </div>
          <ol>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>...</li>
          </ol>
        </div>

        <div>
          <div className={style.fcp}>
            <div className={style.fcp__header}>
              <div>Logo</div>
              <div className={style.burger}></div>
            </div>
            <div className={style.text__box}>
              <p className={clsx(style.text)}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                est eligendi, rem ipsa cum odio inventore corrupti ducimus
              </p>
            </div>
            <div className={style.big__content}>
              <span>big image</span>
            </div>
            <div className={style.text__box}>
              <span className={style.text}>title</span>
            </div>
            <ol>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>...</li>
            </ol>
          </div>
          <span className={style.exemples__description}>Lcp</span>
        </div>
      </div>
    </>
  );
}
