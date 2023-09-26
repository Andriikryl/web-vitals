"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.css";
interface QastProps {
  qast: string;
  answer: string;
}

export default function Qast({ qast, answer }: QastProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={style.gestures__box}>
      <div className={style.box}>
        <motion.div
          onHoverStart={() => setIsOpen(!isOpen)}
          onHoverEnd={() => setIsOpen(!isOpen)}
          className={style.inner__box}
        >
          <span className={style.inner__hover}>{qast}</span>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={style.hover__box}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 50 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={style.hover__text}>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
