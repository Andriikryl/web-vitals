import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

interface CoreSetProps {
  data: string[];
  subTitle?: string;
  title: string;
  desciprion?: string;
  className?: string;
}

export default function CoreSet({
  data,
  subTitle,
  title,
  desciprion,
  className,
}: CoreSetProps) {
  return (
    <div className={style.box}>
      <span className={style.box__subTitle}>{subTitle}</span>
      <h3 className={style.box__title}>{title}</h3>
      <p className={style.box__description}>{desciprion}</p>
      <ul role="list" className={style.box__list}>
        {data.map((item, index) => {
          return (
            <li key={index} className={clsx(style.list__item, className)}>
              <span className={style.inner__item}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
