import React from "react";
import style from "./style.module.css";
import clsx from "clsx";

export default function Optimize() {
  return (
    <div className={style.optimize}>
      <h4 className={style.optimize__title}>
        Optimize Cumulative Layout Shift
      </h4>
      <div className={style.flex__group}>
        <div className={style.mobile}>
          <div className={style.header}>
            <span>header</span>
          </div>
          <div className={style.body}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum modi, accusantium esse id sequi eius cumque doloribus
              rem odio ratione. Reiciendis neque ab possimus, facere dolorem
              incidunt ipsum consequatur mollitia. Lorem ipsum, dolor sit amet
              porro.
            </p>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.description__group}>
            <span className={style.layout}>Layout shift</span>
            <span className={style.content}>Content shifted</span>
          </div>
          <div className={style.mobile}>
            <div className={style.header}>
              <span>header</span>
            </div>
            <div className={style.shift}>
              <span>ad</span>
            </div>
            <div className={style.body}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum modi, accusantium esse id sequi eius cumque doloribus
                rem odio ratione. Reiciendis neque ab possimus, facere dolorem
                incidunt ipsum consequatur mollitia. Lorem ipsum, dolor sit amet
                porro.
              </p>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.description__group}>
            <span className={style.layout}>min-height</span>
            <span className={style.content}>No layout shift</span>
          </div>
          <div className={style.mobile}>
            <div className={style.header}>
              <span>header</span>
            </div>
            <div className={clsx(style.shift, style.plaseholder)}>
              <span>ad placeholder</span>
            </div>
            <div className={style.body}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum modi, accusantium esse id sequi eius cumque doloribus
                rem odio ratione. Reiciendis neque ab possimus, facere dolorem
                incidunt ipsum consequatur mollitia. Lorem ipsum, dolor sit amet
                porro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
