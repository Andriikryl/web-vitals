"use client";
import React from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";

export default function ExempleFid() {
  return (
    <div className={style.exempele__box}>
      <h4 className={style.exempele__title}>exemples</h4>
      <div className={style.flex__group}>
        <div className={style.mobiel}>
          <div className={style.header}>
            <div className={style.cicel}></div>
            <div className={style.cicel}></div>
            <div className={style.cicel}></div>
          </div>
          <div className={style.body}>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}>click</div>
          </div>
        </div>
        <div className={style.mobiel}>
          <div className={style.header}>
            <div className={style.cicel}></div>
            <div className={style.cicel}></div>
            <div className={style.cicel}></div>
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
      </div>
    </div>
  );
}
