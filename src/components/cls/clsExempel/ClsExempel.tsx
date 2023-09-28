"use client";
import React, { useState } from "react";
import style from "./style.module.css";

export default function ClsExempel() {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick((prevCkick) => !prevCkick);
  };
  return (
    <div className={style.exempel__box}>
      <h3 className={style.exempels__title}>Exemple</h3>
      <div className={style.flex__group}>
        {click && (
          <div>
            <p className={style.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              possimus consequatur dolorem itaque assumenda vel excepturi hic.
              Numquam distinctio praesentium perspiciatis, temporibus fugit
              commodi, fuga totam, porro quis sed vero.
            </p>
            <p className={style.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo
              iusto tenetur optio sunt esse autem, maiores facere. Laborum
              libero ex deserunt recusandae esse! Aut, ad alias? Quod, enim
              veniam.
            </p>
          </div>
        )}
        <h4 className={style.title}>title title title title title title</h4>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iusto
          minus neque sunt adipisci quod
        </p>
        <button className={style.button} onClick={handelClick}>
          click
        </button>
      </div>
    </div>
  );
}
