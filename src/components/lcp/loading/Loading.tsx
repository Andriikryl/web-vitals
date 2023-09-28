"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import IconArrowLeft from "@/components/icons/IconArrowLeft";
import { motion } from "framer-motion";

export default function Loading() {
  const [click, setClick] = useState(false);
  const [codeY, setCodeY] = useState(0);
  const handelCkick = () => {
    setClick((prevClick) => !prevClick);
    setCodeY(codeY === 0 ? -350 : 0);
  };
  return (
    <div className={style.flex__group}>
      <div className={style.image__box}>image</div>
      <div className={style.svg__box}>
        <IconArrowLeft />
      </div>
      <button onClick={handelCkick} className={style.add__button}>
        add
      </button>
      <div className={style.info}>
        <motion.code
          className={style.code}
          animate={{ y: codeY }}
          transition={{ duration: 1 }}
        >
          loading=&quot;lazy&quot;
        </motion.code>
        <p className={style.desciprion}>
          You can delay your LCP image via HTML if you set
          loading=&quot;lazy&quot; on your img element. Using lazy loading means
          that the resource will not be loaded until after layout confirms the
          image is in the viewport and so may begin loading later than it
          otherwise would.
        </p>
      </div>
    </div>
  );
}
